const baseUrl = 'https://pokeapi.co/api/v2';

const api = {
  pokemons: {
    async getDataPokemons(page = 0) {
      const response = await fetch(`${baseUrl}/pokemon/?offset=${page}`);
      const data = await response.json();
      return data;
    },
    async getPokemons(name = '') {
      const response = await fetch(`${baseUrl}/pokemon/${name}`);
      const data = await response.json();
      return data;
    }
  }
};

export default api;
