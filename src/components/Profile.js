import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title"><FormattedMessage id="detail" /></h1>
            </div>
          </div>
        </section>
        {this.props.pokemonData.sprites && (
          <div className="columns info-container box">
            <div className="column is-2">
              <img src={this.props.pokemonData.sprites.front_default} alt={this.props.pokemonData.name} />
            </div>
            <div className="column is-9">
              <table className="table is-bordered is-striped is-narrow is-fullwidth">
                <tbody>
                  <tr className="is-size-4"><th><FormattedMessage id="own-data" /></th></tr>
                  <tr><th>Id: {this.props.pokemonData.id}</th></tr>
                  <tr><td><strong><FormattedMessage id="name" />:</strong> {this.props.pokemonData.name}</td></tr>
                  <tr><td><strong><FormattedMessage id="experience" />:</strong> {this.props.pokemonData.base_experience}</td></tr>
                  <tr><td><strong><FormattedMessage id="weight" />: </strong>{this.props.pokemonData.weight}</td></tr>
                  <tr><td><strong><FormattedMessage id="height" />: </strong>{this.props.pokemonData.height}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    )
  }
}
