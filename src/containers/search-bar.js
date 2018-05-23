import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions';

import './index.css';

class SearchBar extends Component {
  onChange = (e) => {
    const term = e.target.value;
    this.props.fetchPokemon(term);
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