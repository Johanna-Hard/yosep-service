const express = require('express');
const db = require('./db');
const models = require('./models');

const app = express();
const port = 5000;
app.use(express.static(__dirname + '/../public/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/listing_header', (req, res) => {
  console.log('get request is detected');
  models.listings.get((err, results)=> {
    res.json(results);
  });
});

app.post('/', (req, res) => {

});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});