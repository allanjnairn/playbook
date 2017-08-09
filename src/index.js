import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Containers/Home';
import StepsBox from './Containers/StepsBox';
import ObjectionHandling from './Containers/ObjectionHandling';

import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'



ReactDOM.render((
	<App Link={Link}>
		<Router>
			<div>
				<Route path='/' exact={true} component={Home} />
				<Route path='/step' exact={true} component={StepsBox} />
				<Route path='/objectionHandling' exact={true} component={ObjectionHandling} />
			</div>
		</Router>
	</App>

	), document.getElementById('root'));
registerServiceWorker();
