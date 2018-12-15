import { gql } from 'apollo-server-express'
import { getBook, getBooks, getTransactions } from './resolvers'
import { IResolvers } from './graphql-typings'

// TODO: this should be extracted into a .graphql file and loaded using webpack
const typeDefs = gql`
    type Query {
        book(isbn: Int!): Book
        books(name: String): [Book]
        booksWithTransactons: [BookWithTransaction]
    }
    type Book {
        isbn: Int
        name: String
    }
    type Transaction {
        transaction_id: Int
        isbn: Int
        buyer: String
        price: Float
    }
    type BookWithTransaction {
        isbn: Int
        name: String
        transaction_id: Int
        buyer: String
        price: Float
    }
`

const resolvers: IResolvers = {
    Query: {
        book(...args) {
            return getBook(...args)
        },
        books(...args) {
            return getBooks(...args)
        },
        booksWithTransactons(...args) {
            return getTransactions(...args)
        },
    },
}

export { typeDefs, resolvers }
