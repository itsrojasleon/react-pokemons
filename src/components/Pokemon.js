import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    return (
      <div>
        <Link to={`/${this.props.name}`}>{this.props.name.toUpperCase()}</Link>
        <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${this.props.name}.gif`} alt={this.props.name} />
      </div>
    )
  }
}
export default Pokemon;