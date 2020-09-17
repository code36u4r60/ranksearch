import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Records from './pages/Records';


const Routes = () => (

    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/records" exact>
                <Records />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>

    </BrowserRouter>
);

export default Routes;