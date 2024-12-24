const Pool = require('pg').Pool;
const bcrypt = require('bcryptjs');
const pool = new Pool({
  user: 'postgres',
  host: 'tools3_project-database-1',
  database: 'API',
  password: '12345678',
  port: 5432,
});
module.exports = pool;
