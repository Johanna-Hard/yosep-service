const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
const port = 5000;
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

});

app.post('/', (req, res) => {

});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});