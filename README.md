# Node DB1 Project Starter Code

## Introduction

- Relational Databases
- Writing Basic SQL Queries
- Writing Basic Queries using Knex.js

## Instructions

### Task 1: Set Up The Project With Git

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Clone your OWN version of the repository (Not Lambda's by mistake!).
- [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

### Task 2: Minimum Viable Product

### Write Basic Queries

Visit [SQL Try Editor at W3Schools.com](https://www.w3schools.com/Sql/trysql.asp?filename=trysql_select_all) using the **Google Chrome (or Chromium if you use Linux) browser** and write _SQL queries_ for the following requirements:

- find all customers with postal code 1010. Returns 3 records.
 Answer: SELECT PostalCode FROM Customers where PostalCode = 1010

- find the phone number for the supplier with the id 11. Should be (010) 9984510.

Answer: SELECT * FROM [Suppliers] where SupplierID = 11 

- list first 10 orders placed, sorted descending by the order date. The order with date 1997-02-12 should be at the top.

Answer: SELECT * FROM [Orders] Order By OrderDate DESC

- find all customers that live in London, Madrid, or Brazil. Returns 18 records.

Answer: SELECT City FROM [Customers] WHERE CITY IN ('Madrid','London') UNION ALL SELECT Country FROM [Customers] WHERE Country IN ('Brazil')

- add a customer record for _"The Shire"_, the contact name is _"Bilbo Baggins"_ the address is _"1 Hobbit-Hole"_ in _"Bag End"_, postal code _"111"_ and the country is _"Middle Earth"_.

Answer: INSERT INTO Customers(CustomerName, ContactName, Address, City, PostalCode, Country) VALUES ("The Shire","Bilbo Baggins","1 Hobbit-Hole", "Bag End", 111, "Middle Earth")

- update _Bilbo Baggins_ record so that the postal code changes to _"11122"_.

UPDATE customers SET PostalCode = 11122 WHERE ContactName = "Bilbo Baggins"
**Clicking the `Restore Database` button in the page will repopulate the database with the original data and discard all changes you have made**.

### Write Accounts API

- Write CRUD endpoints for the `accounts` resource. Use the `db` object imported from `data/dbConfig.js` for database access via `knex`.
- Manually test your endpoints with a REST client like `Insomnia` or `Postman` to check they are working as expected.

#### Accounts Schema

| field  | data type        | metadata                                            |
| ------ | ---------------- | --------------------------------------------------- |
| id     | unsigned integer | primary key, auto-increments, generated by database |
| name   | string           | required, unique                                    |
| budget | numeric          | required                                            |

### Task 3: Stretch Problems

The following exercises **require research**, the concepts needed to complete them have not been covered in class yet.

- Run more queries.

  - Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted. Should be 69.
  - Find all suppliers who have names longer than 20 characters. Returns 11 records.
  - Add a `query string` option to the `GET /api/accounts` endpoint. The `query string` may contain `limit`, `sortby` and `sortdir` keys. If these keys are provided, use these values to limit and sort the `accounts` which are selected from the database. Reference the docs for sorting and limiting in [knexjs.org](http://knexjs.org/).

  ```js
  // sample req.query object
  {
    limit: 5,
    sortby: 'id',
    sortdir: 'desc'
  }
  ```

- run queries using PostgreSQL instead of SQLite.
  - install PostgreSQL.
  - install pgAdmin 4.
  - restore the _northwind_ database using the backup file `./data/northwind.backup`. [Documentation about Backup/Restore on pgAdmin's site.](https://www.pgadmin.org/docs/pgadmin4/development/backup_and_restore.html)
  - use pgAdmin's Query Tool to practice running some queries egainst th nortwind database. **Note: the names of the tables may be different from the names on web tool used for the MVP queries.**
- use PostgreSQL instead of SQLite to power the API.
  - open `./data/dbConfig.js` and change the database constant to be `"production"`.
  - open `./knexfile.js` and follow the instructions to configure the `production` property to use the correct credentials to connect to your postgres server.
  - run the API and test using an HTTP client like `Postman`.
- write a React front end and connect it to the API.

## Submission format

Follow these steps for completing your project.

- [ ] Submit a pull request to merge `<firstName-lastName>` Branch into master (student's  Repo). **Please don't merge your own pull request**
