import React, { Component } from 'react';
import Pokemon from '../components/Pokemon';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { fetchPokemons } from '../actions';

import './index.css';

class Home extends Component {

  componentDidMount() {
    this.props.fetchPokemons();
    // window.addEventListener('scroll', this.scrolling);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.scrolling);
  // }

  // scrolling = (event) => {
  //   if(this.state.loading) return null;

  //   const scrolled = window.scrollY;
  //   const vhHeigth = window.innerHeight;
  //   const fullHeight = document.body.clientHeight;

  //   if(!(scrolled + vhHeigth + 450 >= fullHeight)) {
  //     return null;
  //   }

  //   this.setState({loading: true}, async () => {
  //     const responsePokemons = await api.pokemons.getDataPokemons(this.state.page);
  //     const dataPokemons = responsePokemons.results;

  //     this.setState({
  //       dataPokemons: this.state.dataPokemons.concat(dataPokemons),
  //       page: this.state.page + 20,
  //       loading: false,
  //     })
  //   });
  // }

  render() {
    const { pokemons } = this.props;
    if (!pokemons) {
      return <p>Empty</p>
    }
    return (
      <div>
        <section>
          <div>
            <div>
              <h1 className="title"><FormattedMessage id="list" /></h1>
            </div>
          </div>
        </section>
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
        {/*{this.state.loading && <Loading />}*/}
      </div>
    );
  }
}

Home.propTypes = {
  dataPokemons: PropTypes.array,
  page: PropTypes.number,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ pokemons }) => ({
  pokemons,
});

export default connect(mapStateToProps, { fetchPokemons })(Home);
