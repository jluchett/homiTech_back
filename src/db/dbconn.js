const { Pool } = require('pg');
require('dotenv').config()

// Crear una nueva instancia del pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Función para ejecutar consultas
const query = (text, params) => pool.query(text, params);

module.exports = { query };