import React from 'react';

const PropertyCard = (props) => (
  <div className="property-card">
    <div className="property-card-title"> Title: {props.title}</div>
    <div className="property-card-type"> Type: {props.type}</div>
    <div className="property-card-bathrooms"><i className="fas fa-bath" /> {props.bathrooms}</div>
    <div className="property-card-bedrooms"><i className="fas fa-bed" /> {props.bedrooms}</div>
    <div className="property-card-price"><i className="fas fa-pound-sign" /> {props.price}</div>
    <div className="property-card-city"> City: {props.city}</div>
    <a href="mailto:hello@surreal-estate.com?Subject=I%20Want%20This%20Property!" target="_top">
      <button className="property-card-email">
        <i className="far fa-envelope" /> Email
      </button>
    </a>
  </div>
);

export default PropertyCard;
