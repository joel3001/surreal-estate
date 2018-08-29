import React, { Component } from 'react';
import Alert from './Alert';
import '../styles/alert.scss';
import '../styles/add-property.scss';
import axios from 'axios';

class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        type: 'Flat',
        city: 'Manchester',
        bedrooms: '1',
        bathrooms: '1',
        price: '',
        email: '',
      },
      alertMessage: '',
      isSuccess: false,
      isError: false,
    };
  }

  handleAddProperty = event => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });

    console.log(this.state.fields);
    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.fields.title,
      type: this.state.fields.type,
      city: this.state.fields.city,
      bedrooms: this.state.fields.bedrooms,
      bathrooms: this.state.fields.bathrooms,
      price: this.state.fields.price,
      email: this.state.fields.email,
    })
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property added.',
      }))
      .catch((err) => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };


  render() {
    return (
      <div className="add-property">
        Please fill all details below before continuing<br />
        <form onSubmit={this.handleAddProperty}>
          {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
          {this.state.isError && <Alert message={this.state.alertMessage} />}
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="Property Title" />
          <div>City:
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div>Property Type:
            <select name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End-of-terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div>No. of Bedrooms:<input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} type="number" /></div>
          <div>No. of Bathrooms:<input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} type="number" /></div>
          <div>Price (£):<input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} type="number" /></div>
          <div>Email address:<input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="Example@example.com" /></div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}


export default AddProperty;
