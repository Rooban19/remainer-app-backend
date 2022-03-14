const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'rooban',
  database: 'mydb',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;
