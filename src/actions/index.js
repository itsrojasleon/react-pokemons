import { showLoading, hideLoading } from 'react-redux-loading';

export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const ADD_NEW_PAGE = 'ADD_NEW_PAGE';
export const FETCH_POKEMON = 'FETCH_POKEMON';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    const response = await fetch(`${BASE_URL}/pokemon/?offset=0`);
    const data = await response.json();
    dispatch({
      type: FETCH_POKEMONS,
      pokemons: data,
    });
    dispatch(hideLoading());
  }
}
export const addNewPage = (page) => {
  return async (dispatch) => {
    dispatch(showLoading());
    const response = await fetch(`${BASE_URL}/pokemon/?offset=${page}`);
    const data = await response.json();
    dispatch({
      type: ADD_NEW_PAGE,
      newPage: data,
    });
    dispatch(hideLoading());
  }
};
export const fetchPokemon = (pokemon) => {
  return async (dispatch) => {
    dispatch(showLoading());
    const response = await fetch(`${BASE_URL}/pokemon/${pokemon}`);
    const data = await response.json();
    dispatch({
      type: FETCH_POKEMON,
      pokemon: data,
    });
    dispatch(hideLoading());
  }
}
