import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../views/home.views.js'
import Details from '../views/details.views.js'
import SendRecipe from '../views/send-recipe.views'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/recipe/:name" component={Details} />
                <Route path="/enviar-receita" component={SendRecipe} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes