import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment></Fragment>
    </Provider>
  );
};

export default App;
