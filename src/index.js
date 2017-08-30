import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import messages from './messages.json';

addLocaleData([...en, ...es]);
const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById('root')
);
registerServiceWorker();
