
const sql = require("mysql2");

const url = `mysql://root:EMsJYbnDkfZjiksDQwTFGKWMQIcyXHrt@mysql.railway.internal:3306/railway`

const db = sql.createConnection(url);

db.connect((err) => {
    if(err) throw err;
    console.log("Connection Done!");
})


module.exports = db;
