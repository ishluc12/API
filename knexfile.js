require('dotenv').config();  // Ensure .env file variables are loaded

module.exports = {
  client: process.env.DB_CLIENT || 'pg',  // Use PostgreSQL client, default to 'pg' if not defined
  connection: {
    host: process.env.DB_HOST,  // The host of your database
    user: process.env.DB_USER,  // Your database user
    password: process.env.DB_PASSWORD,  // The password for your database
    database: process.env.DB_DATABASE,  // The name of the database
    port: process.env.DB_PORT || 5432,  // Default to PostgreSQL port 5432 if not defined
  },
};
