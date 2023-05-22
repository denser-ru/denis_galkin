import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import App from './components/App';
import messages from './translations/messages_ru.json'; // импорт словаря для выбранного языка

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="ru" messages={messages}>
      <Router>
        <App />
      </Router>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
