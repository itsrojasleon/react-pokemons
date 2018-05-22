import React from 'react';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import ProfilePokemon from './pages/profile-pokemon';
import Error404 from './pages/error-404';
import SearchBar from './containers/search-bar';

import LoadingBar from 'react-redux-loading';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <SearchBar />
            <LoadingBar style={{ backgroundColor: 'black', height: '5px', borderRadius: 5 }} />
          </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:pokemonId" component={ProfilePokemon} />
          <Route path="*" component={Error404} />
        </Switch>
        </div>
      </Router>
    )
  }
}
