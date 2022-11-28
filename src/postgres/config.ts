const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'ufo',
  password: 'password',
  port: 5432,
})

export { pool }