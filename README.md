# graphql-test
Testing GraphQL integration with Express and MySQL


## Pre-requisites
- MySQL 5.7 installed and running
- Node.js 8.x

## Setup and configuration
1. Create a new database in your MySQL
2. Configure your MySQL connection and default database in `src/config.ts`
3. Import the tables and example data with `src/mysql/dump.sql`
4. `yarn && yarn start`
5. Navigate to `http://localhost:8081/`
6. Paste in the query and execute: 
```graphql
{
  book(isbn: 1001) {
    isbn,
    name
  },
  books(name: "book2") {
    isbn
    name
  }
  booksWithTransactons{
    isbn
    transaction_id
    price
    buyer
    name
  }
}
```