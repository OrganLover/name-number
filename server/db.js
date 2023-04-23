const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres', // postgres user name
  password: 'yunusovdinar2003', // postgres user password
  host: 'localhost',
  port: 5432,
  database: 'name_num_db'
})

module.exports = pool



// 1 команда:

// create DATABASE name_num_db;



// 2 команда:

// \connect name_num_db;



// 3 команда:

// create TABLE name_and_num(
//   id SERIAL PRIMARY KEY,
//   user_name VARCHAR(255),
//   user_number VARCHAR(255)
// );