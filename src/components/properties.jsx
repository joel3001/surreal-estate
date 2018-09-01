import React, { Component } from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../styles/properties.scss';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then(({ data: properties }) => this.setState({ properties }))
      .catch((err) => {
        this.setState({
          isError: true,
          alertMessage: 'Server error, properties currently unavailable, please try again later',
        });
      });
  }

  render() {
    return (
      <div className="Properties">
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    );
  }
}

export default Properties;
