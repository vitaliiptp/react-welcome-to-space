const express = require('express');
const ACA_DB_PORT = process.env.PORT || 7050;
const app = express();
const MySql = require('sync-mysql');

app.use(express.json()); 

const connection = new MySql({
    host: 'localhost',
    user: 'root',
    password: 'Roraima.284',
    database: 'database_astronautas'
});

app.get('/astronauts', (req, res) =>{
const result = connection.query('SELECT * FROM astronauts');
console.log(result);



res.send(result);
});

app.listen(ACA_DB_PORT, () => console.log(`Listening en el port ${ACA_DB_PORT}`));