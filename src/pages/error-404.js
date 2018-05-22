import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

export default class Error404 extends Component {
  render() {
    return (
      <div>
        <h3><FormattedMessage id="not-found" /></h3>
        <Link to="/"><FormattedMessage id="back-to-home" /></Link>
      </div>
    )
  }
}
