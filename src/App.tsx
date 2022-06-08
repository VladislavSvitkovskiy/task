import React from 'react';
import { Provider } from 'react-redux';

import Routes from 'common/routes';
import { ConnectedRouter } from 'connected-react-router';
import store from 'redux/store';
import history from 'services/history';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <ConnectedRouter {...{ history }} >
          <Routes />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
