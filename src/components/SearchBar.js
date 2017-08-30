import React, { Component } from 'react';
import api from '../services/api';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      exactQuery: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOnSearch = this.handleOnSearch.bind(this);
    this.renderPokemon = this.renderPokemon.bind(this);
  }

  async handleSearch(e) {
    e.preventDefault();
    const response = await api.pokemons.getPokemons(this.state.search);

    this.setState({
      exactQuery: response,
    });
  }

  handleOnSearch(res) {
    this.setState({
      search: res.target.value,
    });
  }

  renderPokemon() {
    if(this.state.exactQuery.name === this.state.search) {
      const image = 'https://img.pokemondb.net/sprites/black-white/anim/normal';
      return (
        <div className="card search-container">
          <h3>{this.state.exactQuery.name}</h3>
          <img src={`${image}/${this.state.exactQuery.name}.gif`} alt={this.state.exactQuery.name} />
          <Link to={`/${this.state.exactQuery.name}`}><FormattedMessage id="see-details" /></Link>
        </div>
      )
    }
    if(!this.state.search) {
      return null;
    }
    if(this.state.exactQuery === '') {
      return <div><FormattedMessage id="write" /></div>
    }
    if(this.state.exactQuery.name !== this.state.search) {
      return <div><FormattedMessage id="no-results" /></div>
    }
  }

  render() {
    return (
      <div className="column is-4 input-container">
        <form onSubmit={this.handleSearch}>
          <h3 className="is-size-4"><FormattedMessage id="search" /></h3>
          <input onChange={this.handleOnSearch} className="input is-primary" />
        </form>
        {this.renderPokemon()}
      </div>
    )
  }
}
