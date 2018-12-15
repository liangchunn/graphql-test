import express from 'express'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import { typeDefs, resolvers } from './graphql/graphql'

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: resolvers as any,
})
const app = express()

app.use(bodyParser.json())
apolloServer.applyMiddleware({ app })

export { app }
