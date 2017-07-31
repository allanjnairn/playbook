import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Containers/Home';
import StepsBox from './Containers/StepsBox';

import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


ReactDOM.render((
	<App>
		<Router>
			<div>
				<Route path='/' exact={true} component={Home} />
				<Route path='/step' exact={true} component={StepsBox} />
			</div>
		</Router>
	</App>

	), document.getElementById('root'));
registerServiceWorker();
