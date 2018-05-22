import { showLoading, hideLoading } from 'react-redux-loading';

export const FETCH_POKEMONS = 'FETCH_POKEMONS'
export const ADD_NEW_PAGE = 'ADD_NEW_PAGE';

const BASE_URL = 'https://pokeapi.co/api/v2';

// const api = {
//   pokemons: {
//     async getDataPokemons(page = 0) {
//       const response = await fetch(`${BASE_URL}/pokemon/?offset=${page}`);
//       const data = await response.json();
//       return data;
//     },
//     async getPokemons(name = '') {
//       const response = await fetch(`${BASE_URL}/pokemon/${name}`);
//       const data = await response.json();
//       return data;
//     }
//   }
// };

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
