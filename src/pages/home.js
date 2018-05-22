import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { fetchPokemons, addNewPage } from '../actions';

import './index.css';

class Home extends Component {
  state = {
    page: 0,
  }
  static propTypes = {
    pokemons: PropTypes.array.isRequired,
  }
  componentDidMount() {
    this.props.fetchPokemons();
    window.addEventListener('scroll', this.scrolling);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrolling);
  }
  scrolling = (event) => {

    const scrolled = window.scrollY;
    const vhHeigth = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if(!(scrolled + vhHeigth + 450 >= fullHeight)) {
      return null;
    }
    this.setState({
      page: this.state.page + 20,
    });
    this.props.addNewPage(this.state.page);
  }

  render() {
    const { pokemons } = this.props;
    return (
      <div>
        <h1 className="title"><FormattedMessage id="list" /></h1>
        {/*<button>{this.state.dataPokemons.length} pokemons</button>*/}
        <div>
          {pokemons.map((dataPokemon) => {
            return (
              <Pokemon
                key={dataPokemon.url}
                {...dataPokemon}
              />
            )
          })}
        </div>
        {!pokemons && <div>Loading...</div>}
      </div>
    );
  }
}
const mapStateToProps = ({ pokemons: { pokemons } }) => ({
  pokemons,
});
export default connect(mapStateToProps, { fetchPokemons, addNewPage })(Home);
