import {
    getBookByIsbn,
    getAllBooks,
    getBookByName,
    getBooksWithTransactions,
} from '../mysql/queries'
import { QueryResolvers } from './graphql-typings'

export const getBook: QueryResolvers.BookResolver = async (_, args) => {
    const book = await getBookByIsbn(args.isbn)
    return book.length ? book[0] : null
}
export const getBooks: QueryResolvers.BooksResolver = async (_, args) =>
    !args.name ? await getAllBooks() : await getBookByName(args.name)

export const getTransactions: QueryResolvers.BooksWithTransactonsResolver = async () =>
    await getBooksWithTransactions()
