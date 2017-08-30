import React from 'react';
import { FormattedMessage } from 'react-intl';

const Type = ({type}) => {
  return (
    <div className="columns info-container box">
      <div className="column is-12">
        <table className="table is-bordered is-striped is-narrow is-fullwidth">
          <tbody>
            <tr className="is-size-4"><th><FormattedMessage id="data" /></th></tr>
            <tr><td><strong><FormattedMessage id="type" />:</strong> {type.name.toUpperCase()}</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Type;
