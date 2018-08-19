import React from 'react';
import '../styles/nav-bar.scss';

const NavBar = ({}) => (
  <div className="nav-bar">
    <div className="logo">
      <i className="fas fa-globe-americas" />
    </div>
    <div>
      <ul className="nav">
        <li className="item"><i className="fas fa-home" />Button</li>
        <li className="item">Button</li>
      </ul>
    </div>
  </div>
);

export default NavBar;
