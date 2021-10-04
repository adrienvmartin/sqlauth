const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});

app.get("/", (req, res) => {
  res.send("Hello world!");
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`)
});
