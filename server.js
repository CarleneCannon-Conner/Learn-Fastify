// require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// declare a route
fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        // request needs to have a querystring with a `name` parameter
        querystring: {
            name: { type: 'string'}
        },
        // the response needs to be a `hello` object property of type string
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    // this function is executed for every request before the handler is executed
    preHandler: async (req, reply) => {
        // e.g. check authentication
    },
    handler: async (req, reply) => {
        return { hello : 'world!' }
    }
})

// run the server
const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()