import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import kursor from 'kursor';

import './styles/App.scss';

import Events from './components/pages/Events';
import NavBar from './components/layout/NavBar';
import Contact from './components/pages/Contact';
import Communities from './components/pages/Communities';
import { About, AboutMore } from './components/pages/About';
import { OverLay, VideoBg } from './components/layout/Layers';

new kursor({
	type: 1,
	removeDefaultCursor: true,
	color: '#fff'
});

function App() {
	return (
		<Router>
			<Fragment>
				<NavBar />
				<Switch>
					<Route exact path="/about" component={About} />
					<Route exact path="/communities" component={Communities} />
					<Route exact path="/events" component={Events} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/about/more" component={AboutMore} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
