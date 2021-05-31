import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../views/Home.js'
import Details from '../views/Details.js'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recipe/:name" component={Details} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes