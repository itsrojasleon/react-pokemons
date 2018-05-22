import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class Pokemon extends Component {
  render() {
    return (
      <div className="pokemon">
        <img className="pokemon-image" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${this.props.name}.gif`} alt={this.props.name} />
        <Link className="link" to={`/${this.props.name}`}>{this.props.name}</Link>
      </div>
    )
  }
}
export default Pokemon;