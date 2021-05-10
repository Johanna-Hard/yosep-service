import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listingId: 1,
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
    axios.get(`http://localhost:5000/api/listingheader/${this.state.listingId}`)
      .then(resp => {
        this.setState({ listing: resp.data[0] });
      })
      .catch(err => {
        console.log('===== AXIOS get request failed');
      });
  }

  render() {
    return (
      <>
        <div>
          <h1 className="title">
            {this.state.listing.listingName} code review -> talk is cheap
          </h1>
        </div>
        <div className="subTitle">
        <i style={{color: 'red'}} className='fas fa-star'></i>
          <span style={{ marginBottom: '7px'}}> {this.state.listing.rating} ({this.state.listing.review} reviews) </span>
          <span> &#8226; Superhost &#8226; </span>
          <span className="header_addr">{this.state.listing.city}, {this.state.listing.state}</span>
        </div>
      </>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('airbnb'));