
const sql = require("mysql2");

const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Parth@1204',
    database: 'bannersdata'
});

db.connect((err) => {
    if(err) throw err;
    console.log("Connection Done!");
})


module.exports = db;
