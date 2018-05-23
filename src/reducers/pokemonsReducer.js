import { FETCH_POKEMONS, ADD_NEW_PAGE, FETCH_POKEMON } from '../actions';

const initialState = {
  pokemons: [],
  pokemon: "",
};
export default function pokemonsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: state.pokemons.concat(action.pokemons.results),
      }
    case ADD_NEW_PAGE:
      return {
        ...state,
        pokemons: state.pokemons.concat(action.newPage.results),
      }
    case FETCH_POKEMON:
      return {
        ...state,
        pokemon: action.pokemon,
      }
    default:
      return state;
  }
}