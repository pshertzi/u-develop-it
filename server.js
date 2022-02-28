const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

//expree middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'dman1972',
        database: 'election'
    },
    console.log('Connected to the election database')
);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});