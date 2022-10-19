import Fastify from 'fastify'
import * as vscode from 'vscode'

const fastify = Fastify({
    logger: true,
})

fastify
    .get('/', async () => {
        vscode.commands.executeCommand('extension.helloWorld')
        return { hello: 'world' }
    })
    .post('/', async (req, _reply) => {
        vscode.commands.executeCommand('extension.helloWorld', req.body)
        return { hello: 'world' }
    })

export const initialize = (): void => {
    try {
        fastify.listen({ port: 3000, host: '0.0.0.0' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
