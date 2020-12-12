const { Pool } = require("pg");

const pool = new Pool({
  user: "root",
  password: "avinash14",
  host: "localhost",
  port: 3306,
  database: "bank_account",
});

const getClient = async () => {
  try {
    const client = await pool.connect();
    return client;
  } catch (error) {
    return null;
  }
};

module.exports = { pool, getClient };
