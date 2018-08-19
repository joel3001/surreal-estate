import React from 'react';
import '../styles/app.scss';
import NavBar from './nav-bar';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel);

const App = ({}) => (
  <div className="app">
    <h1>A Reet Nice Place!</h1>
    <NavBar />
  </div>
);

export default App;
