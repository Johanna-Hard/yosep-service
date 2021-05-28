var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

var config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                }
              ]
            ]
          }
        }
      }
    ]
  }
};

var listingDescriptionConfig = Object.assign({}, config, {
  name: "listingDescription",
  entry: `${SRC_DIR}/ListingDescription.jsx`,
  output: {
    filename: 'listingDescription.js',
    path: DIST_DIR
  },
});

module.exports = [
  listingDescriptionConfig,
];