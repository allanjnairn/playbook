import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Containers/Home';

import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render((
	<App>
		<Router>
			<Route exactPath='/' component={Home} />
		</Router>
	</App>

	), document.getElementById('root'));
registerServiceWorker();
