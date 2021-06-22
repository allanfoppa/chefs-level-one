import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../views/home.views.js'
import Details from '../views/details.views.js'

const Routes = () => {
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/:name" component={Details} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes