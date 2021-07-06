import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Film from './pages/Film';
import Films from './pages/Films';
import People from './pages/People';
import Person from './pages/Person';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/films">
                    <Films></Films>
                </Route>
                <Route exact path="/films/:filmid">
                    <Film></Film>
                </Route>
                <Route exact path="/people">
                    <People></People>
                </Route>
                <Route exact path="/people/:personid">
                    <Person></Person>
                </Route>
                <Route exact path="/*">
                    {() => <h1>Error: 404 Page Not Found</h1>}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;