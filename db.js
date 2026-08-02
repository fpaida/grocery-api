
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "grocerydb_6ss0_user",
    host: "dpg-d9nake8ae00c73fpt6cg-a.ohio-postgres.render.com",
    database: "grocerydb_6ss0",
    password: "IOFbUWrnwOqZirlx7rNs8YKdF2P1MPJe",
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

module.exports = pool;