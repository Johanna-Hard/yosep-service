import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import parse from 'html-react-parser';
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      listingId: 4,
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
    axios.get(`/api/listingdescription/${this.state.listingId}`)
      .then(resp => {
        this.setState({ listing: resp.data[0] });
      })
      .catch(err => {
        console.log('===== AXIOS get request failed');
      });
  }

  render() {
    return (
      <div className="description">
        {parse('' + this.state.listing.listingDescription)}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('airbnb'));