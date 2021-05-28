import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class ListingHeader extends React.Component {
    constructor({ location }) {
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
            listing: {},
            rating: 0
        };
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        // console.log(this.state.listing);
    }

    getData() {
        axios.get(`http://localhost:5001/api/listingheader/${this.state.listingId}`)
            .then(resp => {
                this.setState({ listing: resp.data[0] });
            })
            .catch(err => {
                console.log('===== AXIOS get request failed');
            });

        axios.get(`http://localhost:2002/reviews/${this.state.listingId}`)
            .then(resp => {
                this.setState({ rating: (resp.data.rating * 1).toFixed(2) });
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
                        {this.state.listing.listingName}
                    </h1>
                </div>
                <div className="subTitle">
                    <i style={{ color: 'red' }} className='fas fa-star'></i>
                    {/* <span style={{ marginBottom: '7px' }}> {this.state.rating} ({this.state.listing.review} reviews) </span> */}
                    <span style={{ marginBottom: '7px' }}> {this.state.rating} </span>
                    <span> &#8226; Superhost &#8226; </span>
                    <span className="header_addr">{this.state.listing.city}, {this.state.listing.state}</span>
                </div>
            </>
        )
    }
}

export default ListingHeader;

ReactDOM.render(
  <Router>
      <Route path="/" component={ListingHeader} />
  </Router>,
  document.getElementById('listingHeader')
);