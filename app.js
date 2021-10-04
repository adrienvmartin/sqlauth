const express = require('express');
const mysql = require('mysql');
const config = require('./dbconfig');

const app = express();

const db = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD,
  // database: 'node_login'
});

db.connect((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('MySQL connected!')
  }
})

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`)
});
