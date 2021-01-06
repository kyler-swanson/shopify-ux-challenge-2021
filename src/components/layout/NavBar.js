import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Layout, Space } from 'antd';
import Container from './Container';

const { Header } = Layout;

const NavBar = ({ title }) => {
  return (
    <Fragment>
      <Header style={{ backgroundColor: 'white', padding: '0' }}>
        <Container>
          <Space direction='vertical'>
            <h1>{title}</h1>
          </Space>
        </Container>
      </Header>
    </Fragment>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: 'The Shoppies'
};

export default NavBar;
