import { mysqlConnection } from './db'
import { Book, BookWithTransaction } from '../graphql/graphql-typings'

export const getAllBooks = (): Promise<Book[]> =>
    new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT * from books', (err, rows) => {
            if (err) {
                return reject(err)
            }
            return resolve(rows)
        })
    })

export const getBookByIsbn = (isbn: number): Promise<Book[]> =>
    new Promise((resolve, reject) => {
        mysqlConnection.query(
            'SELECT * from books WHERE isbn = ?',
            [isbn],
            (err, rows) => {
                if (err) {
                    return reject(err)
                }
                return resolve(rows)
            }
        )
    })

export const getBookByName = (name: string): Promise<Book[]> =>
    new Promise((resolve, reject) => {
        mysqlConnection.query(
            'SELECT * from books WHERE name = ?',
            [name],
            (err, rows) => {
                if (err) {
                    return reject(err)
                }
                return resolve(rows)
            }
        )
    })

export const getBooksWithTransactions = (): Promise<BookWithTransaction[]> =>
    new Promise((resolve, reject) => {
        mysqlConnection.query(
            'SELECT * FROM books RIGHT JOIN transactions USING (isbn)',
            (err, rows) => {
                if (err) {
                    return reject(err)
                }
                return resolve(rows)
            }
        )
    })
