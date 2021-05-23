import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';

class App extends React.Component {
  constructor({location}) {
    super();

    let propId = 1;
    let propQuery = location.search;
    if (propQuery) {
        let id = parseInt(propQuery.slice(11));
        console.log(id);
        if (id > 0) {
            propId = id;
        }
    }

    this.state = {
      listingId: propId,
      listing: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate() {
    console.log(this.state.listing);
  }

  getData() {
    // console.log(this.state.listingId);
    axios.get(`http://localhost:5003/api/hostedBy/${this.state.listingId}`)
      .then(resp => {
        this.setState({ listing: resp.data });
      })
      .catch(err => {
        // console.log('===== AXIOS get request failed');
      });
  }

  isPlural(val) {
    return val > 1 ? 's' : '';
  }

  render() {
    return (
      <div className="hostedBy">
        {parse(this.state.listing.accomodates + ' guest' + this.isPlural(this.state.listing.accomodates) + ' ' + unescape('&middot;') + ' ' + this.state.listing.bedrooms + ' bedroom' + this.isPlural(this.state.listing.bedrooms) + ' ' + unescape('&middot;') + ' ' + this.state.listing.beds + ' bed' + this.isPlural(this.state.listing.beds) + ' ' + unescape('&middot;') + ' ' + this.state.listing.bathrooms + ' bath' + this.isPlural(this.state.listing.bathrooms))}
        <span id='forTest'></span>
      </div>
    )
  }
}

export default App;