import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Containers/Home';
import StepsBox from './Containers/StepsBox';
import ObjectionHandling from './Containers/ObjectionHandling';
import SideMissionPage from './Containers/SideMissionPage';

import registerServiceWorker from './registerServiceWorker';

import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
  Redirect
} from 'react-router-dom'


ReactDOM.render((
	<Router>
		<Route render={({history})=>
			<App history={history} withRouter={withRouter} Link={Link}>
				<div>
					<Route path='/home' exact={true} component={Home} />
					<Route path='/step' exact={true} component={StepsBox} />
					<Route path='/objectionHandling' exact={true} component={ObjectionHandling} />
					<Route path='/sideMission/:title' exact={true} component={SideMissionPage} />

				</div>
			</App>
	}/>
			
	</Router>

	), document.getElementById('root'));
registerServiceWorker();
