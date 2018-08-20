import React from 'react';
import '../styles/app.scss';
import NavBar from './nav-bar';
import Properties from './properties';
import { Switch, Route } from 'react-router-dom';
import AddProperty from './add-property';


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel);

const App = ({}) => (
  <div className="app">
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route path="/add-property" component={AddProperty} />
    </Switch>
  </div>
);

export default App;
