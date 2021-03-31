import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/'
import Details from '../pages/Details/'

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