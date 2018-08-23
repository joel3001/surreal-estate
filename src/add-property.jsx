import React, { Component } from 'react';
import '../styles/add-property.scss';

class AddProperty extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        title: '',
        type: '',
        bedrooms: '',
        bathrooms: '',
        city: 'Manchester',
        price: '',
      },
    };
  }

  handleAddProperty = event => {
    event.preventDefault();

    console.log(this.state.fields);
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
          <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="Property Title" />
          <div>No. of Bedrooms:<input name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange} type="number" /></div>
          <div>No. of Bathrooms:<input name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange} type="number" /></div>
          <div>Price (£):<input name="price" value={this.state.fields.price} onChange={this.handleFieldChange} type="number" /></div>
          <div>Email address:<input name="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="Example@example.com" /></div>
          <div> Property Type:
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
          <div> City:
            <select name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProperty;
