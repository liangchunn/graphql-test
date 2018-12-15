import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import { schema, root } from './graphql/graphql'

const app = express()

app.use(
    '/',
    graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true,
    })
)

export { app }
