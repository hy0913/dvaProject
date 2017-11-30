import React from 'react';
import { Router, Route } from 'dva/router';
import Error from './routes/error';
import App from './routes/app';
import Home from './routes/Home';
import './styles/style.css';

//异步加载modal用
const cached = {}
const registerModel = (app, model) => {
  if (!cached[model.namespace]) {
    app.model(model)
    cached[model.namespace] = 1
  }
}

export default function ({history, app}) {
	const routes = [
		{
			path: 'error',
      		getComponent(nextState, cb) {
			    require.ensure([], (require) => {
			      cb(null, Error)
			    }, 'Error')
		  	},
		},
		{
			
			path: '/',
			component:App,
      		getIndexRoute (nextState, cb) {
		        require.ensure([], require => {
		          cb(null, {component: Home})
		        })
	      	},
		},
	]
	return <Router history={history} routes={routes} />
}
