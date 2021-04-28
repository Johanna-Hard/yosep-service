const express = require('express');
const db = require('./db');

const app = express();
const port = 5000;
app.use(express.static(__dirname + '/../public/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('get request is detected');
});

app.post('/', (req, res) => {

});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});