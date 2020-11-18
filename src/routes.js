import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import Product from './pages/product'
import RandomImages from './pages/random_images'
import { AnimatedSwitch } from 'react-router-transition';

const Routes = () => (
    <BrowserRouter>
        <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper">
            <Route exact path="/" component={Main} />
            <Route path="/products/:id" component={Product} />
            <Route path="/random_images" component={RandomImages} />
        </AnimatedSwitch>
    </BrowserRouter>
)

export default Routes;