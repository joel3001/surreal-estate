import React from 'react';
import '../styles/nav-bar.scss';
import { Link } from 'react-router-dom';

const NavBar = ({}) => (
  <div className="nav-bar">
    <div className="logo">
      <i className="fas fa-globe-americas" />
    </div>
    <h1 className="header">A Reet Nice Place!</h1>
    <div>
      <ul className="nav">
        <Link className="item" to="/"><i className="fas fa-home" />View Properties</Link>
        <Link className="item" to="/add-property"><i className="fas fa-home" />Add Property</Link>
      </ul>
    </div>
  </div>
);

export default NavBar;
