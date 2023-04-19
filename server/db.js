const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: 5432,
  database: process.env.POSTGRES_DB_NAME
})

module.exports = pool