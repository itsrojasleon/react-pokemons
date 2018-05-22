import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

import './index.css';

class SearchBar extends Component {
  // state = {
  //   search: '',
  //   exactQuery: '',
  // };

  // handleSearch = async (e) => {
  //   e.preventDefault();
  //   const response = await api.pokemons.getPokemons(this.state.search);

  //   this.setState({
  //     exactQuery: response,
  //   });
  // }

  // handleOnSearch = (res) => {
  //   this.setState({
  //     search: res.target.value,
  //   });
  // }

  // renderPokemon = () => {
  //   if(this.state.exactQuery.name === this.state.search) {
  //     const image = 'https://img.pokemondb.net/sprites/black-white/anim/normal';
  //     return (
  //       <div>
  //         <h3>{this.state.exactQuery.name}</h3>
  //         <img src={`${image}/${this.state.exactQuery.name}.gif`} alt={this.state.exactQuery.name} />
  //         <Link to={`/${this.state.exactQuery.name}`}><FormattedMessage id="see-details" /></Link>
  //       </div>
  //     )
  //   }
  //   if(!this.state.search) {
  //     return null;
  //   }
  //   if(this.state.exactQuery === '') {
  //     return <div><FormattedMessage id="write" /></div>
  //   }
  //   if(this.state.exactQuery.name !== this.state.search) {
  //     return <div><FormattedMessage id="no-results" /></div>
  //   }
  // }
  state = {
    term: '',
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchPokemon(this.state.term);
  }

  onChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form">
        <input
          className="input"
          placeholder="Find pokemons"
          onChange={this.onChange}
        />
        <button className="button-submit" type="submit">Search</button>
      </form>
    )
  }
}
export default connect(null, { fetchPokemon })(SearchBar);