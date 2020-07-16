import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Explore from './pages/Explore';
import Content from './pages/Content';
import Configuration from './pages/Configuration';
import ExploreSchool from './pages/ExploreSchool';

import GlobalStyles from './styles/global'

ReactDOM.render(
	<>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/explore" exact component={Explore} />
				<Route path="/exploreschool" exact component={ExploreSchool} />
				<Route path="/configuration" exact component={Configuration} />
				<Route path='/content/:content+' exact component={Content} />
			</Switch>
		</ BrowserRouter>
		<GlobalStyles />
	</>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
