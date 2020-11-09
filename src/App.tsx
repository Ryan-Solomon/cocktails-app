import React from 'react';
import './styles/app.scss';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import Error from './pages/Error';
import SingleCocktail from './pages/SingleCocktail';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/cocktail/:id'>
            <SingleCocktail />
          </Route>

          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
