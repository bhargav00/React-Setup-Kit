import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute,browserHistory } from "react-router";

import MainComponent from '../components/main.js';

var route= <Router history={browserHistory}>
			<Route path='/' component={MainComponent}>
				
			</Route>
		</Router>;
   export default route;