const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE,
  ssl: {
    rejectUnauthorized: false // Required for Neon serverless connections
  }
});

pool.on('connect', () => {
  console.log('✅ Connected to Neon PostgreSQL');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};