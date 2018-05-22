import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends Component {
  render() {
    return (
      <div className="box container-name-and-pokemon column is-3">
        <Link className="is-size-5" to={`/${this.props.name}`}>{this.props.name.toUpperCase()}</Link>
        <img className="image-pokemon" src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${this.props.name}.gif`} alt={this.props.name} />
      </div>
    )
  }
}
export default Pokemon;