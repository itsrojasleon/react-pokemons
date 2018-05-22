import React, { Component } from 'react';
import api from '../services/api';
import Pokemon from '../components/Pokemon';
import Loading from '../components/shared/Loading';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

class Home extends Component {
  state = {
    dataPokemons: [],
    page: 0,
    loading: true,
  };

  async componentDidMount() {
    const pokemonsResponse = await api.pokemons.getDataPokemons(this.state.page);
    const dataPokemons = pokemonsResponse.results;

    this.setState({
      dataPokemons,
      page: this.state.page + 20,
      loading: false,
    });
    window.addEventListener('scroll', this.scrolling);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolling);
  }

  scrolling = (event) => {
    if(this.state.loading) return null;

    const scrolled = window.scrollY;
    const vhHeigth = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if(!(scrolled + vhHeigth + 450 >= fullHeight)) {
      return null;
    }

    this.setState({loading: true}, async () => {
      const responsePokemons = await api.pokemons.getDataPokemons(this.state.page);
      const dataPokemons = responsePokemons.results;

      this.setState({
        dataPokemons: this.state.dataPokemons.concat(dataPokemons),
        page: this.state.page + 20,
        loading: false,
      })
    });
  }

  render() {
    return (
      <div>
        <section className="hero is-warning">
          <div className="hero-body">
            <div className="container">
              <h1 className="title"><FormattedMessage id="list" /></h1>
            </div>
          </div>
        </section>
        <button className="is-static button counter">{this.state.dataPokemons.length} pokemons</button>
        <div className="columns is-multiline">
          {this.state.dataPokemons.map((dataPokemon) => {
            return (
              <Pokemon
                key={dataPokemon.url}
                {...dataPokemon}
              />
            )
          })}
        </div>
        {this.state.loading && <Loading />}
      </div>
    );
  }
}

Home.propTypes = {
  dataPokemons: PropTypes.array,
  page: PropTypes.number,
  loading: PropTypes.bool,
};

export default Home;
