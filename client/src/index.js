import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListingHeader from './listingHeader.jsx';

// ReactDOM.render(<App />, document.getElementById('notInDomYet'));
ReactDOM.render(
  <Router>
      <Route path="/" component={ListingHeader} />
  </Router>,
  document.getElementById('listingHeader')
);