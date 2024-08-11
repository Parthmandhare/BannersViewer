// 1. banner name
// 2. banner desc
// 3. timmer
// 4. visibility
// 5. links


// CREATE TABLE banners (
//     Title VARCHAR(100),
//     Description VARCHAR(100),
//     Timer INT,
//     Link VARCHAR(200)
// );

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
