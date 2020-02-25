import React, {Fragment} from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Communities from './components/pages/Communities';
import Events from './components/pages/Events';
import ContactUs from './components/pages/ContactUs';


function App() {
  return (
    <Fragment className="App">
      <Router>
      <div className="overlay">
        <div className='overlay-logo'/>
      </div>
      <div className='container'>
          <Switch>
            <Route path='/' component={Navbar}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/communities' component={Communities}/>
            <Route exact path='/events' component={Events}/>
            <Route exact path='/contact' component={ContactUs}/>
          </Switch>
          <About/>
          </div>
      </Router>
    </Fragment>
  );
}

export default App;
