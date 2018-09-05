import React, { Component } from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../styles/properties.scss';
import { Link } from 'react-router-dom';
import qs from 'qs';

class Properties extends Component {
  constructor() {
    super();
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
      search: '',
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

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };

    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSearch = event => {
    event.preventDefault();

    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });

    const { history } = this.props;
    history.push(newQueryString);

  }

  render() {
    return (
      <div>
        <div className="property-search">
          <form onSubmit={this.handleSearch}>
            <input type="text" value={this.state.search} onChange={event => this.setState({ search: event.target.value })} placeholder="Search Properties..." />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="hbar">
          <Link className="manchester" to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
          <Link className="leeds" to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
          <Link className="sheffield" to={this.buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
          <Link className="liverpool" to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
          <Link to={this.buildQueryString('sort', { price: -1 })}>Sort by Highest Price</Link>
          <Link to={this.buildQueryString('sort', { price: 1 })}>Sort by Lowest Price</Link>
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
