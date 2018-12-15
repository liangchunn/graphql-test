import * as mysql from 'mysql'
import { mysqlConfig } from '../config'

const mysqlConnection = mysql.createConnection(mysqlConfig)

try {
    mysqlConnection.connect()
} catch (e) {
    // tslint:disable-next-line
    console.error('Database connection failed:', e)
    process.exit(1)
}

export { mysqlConnection }
