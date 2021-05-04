const db = require('./db');

const sampleData = [
  {
    id: 1,
    name: '"Pirate Ship" Modern Live-Aboard Mississippi River',
    reviewsUrl: 'http://localhost:5500/reviewsUrl/1',
    location: 'Saint Paul, Minnesota, United States',
    hostName: 'Dan',
    hostRating: 'Superhost',
    roomInfo: '6 guests - 2 bedrooms - 3 beds - 2 baths'
  },
  {
    id: 2,
    name: '4 bed house for super Bowl 2018 W/transportation',
    reviewsUrl: 'http://localhost:5500/reviewsUrl/2',
    location: 'Saint Paul, Minnesota, United States',
    hostName: 'Paul',
    hostRating: '',
    roomInfo: '8 guests · 2 bedrooms · 4 beds · 1 private bath'
  },
  {
    id: 3,
    name: '4 bed house for super Bowl 2018 W/transportation',
    reviewsUrl: 'http://localhost:5500/reviewsUrl/3',
    location: 'Saint Paul, Minnesota, United States',
    hostName: 'Paul',
    hostRating: '',
    roomInfo: '8 guests · 2 bedrooms · 4 beds · 1 private bath'
  },
  {
    id: 4,
    name: 'Eclectic Apartment',
    reviewsUrl: 'http://localhost:5500/reviewsUrl/4',
    location: 'Lake Placid, New York, United States',
    hostName: 'Margarete',
    hostRating: 'Superhost',
    roomInfo: '3 guests · 1 bedroom · 1 bed · 1 bath'
  },
  {
    id: 5,
    name: "Enjoy Atlantic City's best at the Skyline Tower!",
    reviewsUrl: 'http://localhost:5500/reviewsUrl/5',
    location: 'Atlantic City, New Jersey, United States',
    hostName: 'Rick',
    hostRating: 'Superhost',
    roomInfo: '6 guests · 2 bedrooms · 1 bed · 2 baths'
  },
  {
    id: 6,
    name: "Point Breeze Essence",
    reviewsUrl: 'http://localhost:5500/reviewsUrl/6',
    location: 'Philadelphia, Pennsylvania, United States',
    hostName: 'Meisha',
    hostRating: 'Superhost',
    roomInfo: '2 guests · 1 bedroom · 1 bed · 1 bath'
  },
  {
    id: 7,
    name: "Just Be Byrdcliff",
    reviewsUrl: 'http://localhost:5500/reviewsUrl/7',
    location: 'Woodstock, New York, United States',
    hostName: 'Gillian',
    hostRating: 'Superhost',
    roomInfo: '6 guests · 3 bedrooms · 4 beds · 1 bath'
  }

];

const insertSampleData = function () {
  sampleData.forEach(listing => {
    let params = [listing.id, listing.name, listing.reviewsUrl, listing.location, listing.hostName, listing.hostRating, listing.roomInfo];
    db.query('insert into listing_header value (?, ?, ?, ?, ?, ?, ?)', params, (err, results) => {
      if (err) {
        console.log('====== SEEDING DATABASE ERROR =======');
      } else {
        // console.log('======= SEEDING DATABASE SUCCESS =======');
      }
    });
  });
  db.end(err => {
    if (err) {
      console.log("Cannot close database");
    }
  });
};

insertSampleData();