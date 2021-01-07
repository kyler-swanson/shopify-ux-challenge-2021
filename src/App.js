import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import NavBar from './components/layout/NavBar';
import BodyContent from './components/layout/BodyContent';
import { showWelcomeModal } from './components/WelcomeModal';
import { Layout } from 'antd';

const App = () => {
  useEffect(() => {
    if (!localStorage.getItem('saved_nominations')) {
      showWelcomeModal();
    }
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <NavBar />
        <BodyContent />
      </Layout>
    </Provider>
  );
};

export default App;
