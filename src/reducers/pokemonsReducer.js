import { FETCH_POKEMONS } from '../actions';

export default function pokemonsReducer(state = [], action) {
  switch(action.type) {
    case FETCH_POKEMONS:
      return action.pokemons.results;
    default:
      return state;
  }
}