import React from 'react';
import { FormattedMessage } from 'react-intl';

const Type = ({type}) => {
  return (
    <div>
      <div>
        <table>
          <tbody>
            <tr><th><FormattedMessage id="data" /></th></tr>
            <tr><td><strong><FormattedMessage id="type" />:</strong> {type.name.toUpperCase()}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Type;
