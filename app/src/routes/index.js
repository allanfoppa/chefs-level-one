import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home/'
import RecipeDetails from '../pages/RecipeDetails/'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recipe/:name" component={RecipeDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes