import { buildSchema } from 'graphql'

import {
    getBookByIsbn,
    getAllBooks,
    getBookByName,
    getBooksWithTransactions,
} from '../mysql/queries'

const schema = buildSchema(`
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
`)

const getBook = async (args: { isbn: number }) => {
    const book = await getBookByIsbn(args.isbn)
    return book.length ? book[0] : null
}
const getBooks = async (args: { name?: string }) =>
    !args.name ? await getAllBooks() : await getBookByName(args.name)

const getTransactions = async () => await getBooksWithTransactions()

const root = {
    book: getBook,
    books: getBooks,
    booksWithTransactons: getTransactions,
}

export { schema, root }
