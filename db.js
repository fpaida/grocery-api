const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "grocerydb",
    password: "StudentDB2026!",
    port: 5432,
});

pool.query("SELECT NOW()", (error, results) => {
    if (error) {
        console.log("Database connection failed:", error.message);
    } else {
        console.log("Database connected successfully!");
        console.log(results.rows);
    }
});

module.exports = pool;