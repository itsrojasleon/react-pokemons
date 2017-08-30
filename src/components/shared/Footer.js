import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <strong className="is-size-4"><Link to="/">React Pokemons</Link></strong>
          <span role="img" aria-label="heart">♥️</span>
          <br />
          <FormattedMessage id="by" /> <a href="https://github.com/RojasLeonJuanLuis">Luis Rojas</a>
        </div>
      </div>
    </footer>
  )
}
export default Footer;
