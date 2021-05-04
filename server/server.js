const express = require('express');
const db = require('./db');
const models = require('./models');

const app = express();
const port = 5000;
app.use(express.static(__dirname + '/../public/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/listing_header', (req, res) => {
  models.listings.get((err, results)=> {
    res.json(results);
  });
});

app.get('/listing_header/:id', (req, res) => {
  models.listing.get(req.params.id, (err, result) => {
    res.json(result);
  });
});

app.post('/', (req, res) => {

});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});