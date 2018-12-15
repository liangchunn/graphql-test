import * as http from 'http'
import { app } from './app'

http.createServer(app).listen(8081, () => {
    // tslint:disable-next-line
    console.log('Server running on port 8081')
})
