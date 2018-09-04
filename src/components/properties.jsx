import React, { Component } from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../styles/properties.scss';
import { Link } from 'react-router-dom';

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

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;

    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div>
      <div className="hbar">
          <Link className="manchester" to={`?query={"city": "Manchester"}`} >Manchester</Link>
          <Link className="leeds" to={`?query={"city": "Leeds"}`}>Leeds</Link>
          <Link className="sheffield" to={`?query={"city": "Sheffield"}`}>Sheffield</Link>
          <Link className="liverpool" to={`?query={"city": "Liverpool"}`}>Liverpool</Link>
         </div>
      <div className="Properties">
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
      </div>
    );
  }
}

export default Properties;
