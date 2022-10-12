import Fastify from 'fastify'
import fastifyEnv from '@fastify/env'
import { schema } from './config/dotenv.js'

const fastify = Fastify({
    logger: true,
})

async function initialize(): Promise<void> {
    fastify.register(fastifyEnv, {
        confKey: 'config',
        dotenv: true,
        schema: schema,
        data: process.env,
    })

    await fastify.after()
}

async function start(): Promise<void> {
    await initialize()

    fastify.get('/', async (request, reply) => {
        return { hello: fastify.config.EXTENSION_PREFIX }
    })

    try {
        await fastify.ready()
        await fastify.listen({ port: 3000, host: '0.0.0.0' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
