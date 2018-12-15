import { mysqlConnection } from './db'

export const getAllBooks = () =>
    new Promise((resolve, reject) => {
        mysqlConnection.query('SELECT * from books', (err, rows) => {
            if (err) {
                return reject(err)
            }
            return resolve(rows)
        })
    })

export const getBookByIsbn = (isbn: number): Promise<any[]> =>
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

export const getBookByName = (name: string) =>
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

export const getBooksWithTransactions = () =>
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
