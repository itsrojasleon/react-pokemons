import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import pokemonsReducer from './pokemonsReducer';

export default combineReducers({
  pokemons: pokemonsReducer,
  loadingBar: loadingBarReducer,
});