export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const ADD_NEW_PAGE = 'ADD_NEW_PAGE';
export const FETCH_POKEMON = 'FETCH_POKEMON';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemons = () => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/pokemon/?offset=1`);
    const data = await response.json();
    dispatch({
      type: FETCH_POKEMONS,
      pokemons: data,
    });
  }
}
export const addNewPage = (page) => {
  return async (dispatch) => {
    const response = await fetch(`${BASE_URL}/pokemon/?offset=${page}`);
    const data = await response.json();
    dispatch({
      type: ADD_NEW_PAGE,
      newPage: data,
    });
  }
};
export const fetchPokemon = (pokemon) => ({
  type: FETCH_POKEMON,
  pokemon
});
