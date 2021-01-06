import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import NavBar from './components/layout/NavBar';
import BodyContent from './components/layout/BodyContent';
import { Layout } from 'antd';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Layout>
          <NavBar />
          <BodyContent />
        </Layout>
      </Fragment>
    </Provider>
  );
};

export default App;
