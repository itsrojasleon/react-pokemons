import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PokemonIndex from './pages/PokemonIndex';
import ProfilePokemon from './pages/ProfilePokemon';
import Error404 from './pages/Error404';

export default class Routes extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={PokemonIndex} />
          <Route exact path="/:id" component={ProfilePokemon} />
          <Route path="*" component={Error404} />
        </Switch>
      </main>
    )
  }
}
