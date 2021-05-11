const express = require('express');
const db = require('./db');
const models = require('./models');

const app = express();
const port = 5002;
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/listingdescription/:id', (req, res) => {
  models.listing.get(req.params.id, (err, result) => {
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});