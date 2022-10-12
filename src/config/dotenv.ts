const properties = {
    EXTENSION_PREFIX: {
        type: 'string',
    },
}

export const schema = {
    type: 'object',
    required: Object.keys(properties),
    properties,
}

declare module 'fastify' {
    interface FastifyInstance {
        config: typeof properties
    }
}
