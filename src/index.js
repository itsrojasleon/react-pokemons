import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './app';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import messages from './messages.json';

import { Provider } from 'react-redux';
import store from './store';

addLocaleData([...en, ...es]);
const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
