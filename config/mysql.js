const mysql = require("mysq12/promise");

const config = {
    db: {
        host: "localhost",
        user: "usuario",
        password: "123456",
        database: "teste"
    }
};

async function query(sql, params) {
    const connection = await mysql.createConnection(config.db);
    const [results, ] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
};