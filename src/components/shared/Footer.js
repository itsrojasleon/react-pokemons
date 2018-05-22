import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <strong><Link to="/">React Pokemons</Link></strong>
          <span role="img" aria-label="heart">♥️</span>
          <br />
          <FormattedMessage id="by" /> <a href="https://github.com/rojasleon">Luis Rojas</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
