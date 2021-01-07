import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Layout, Space } from 'antd';
import Container from './Container';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = ({ title }) => {
  return (
    <Header style={{ backgroundColor: 'white', padding: '0' }}>
      <Container>
        <Space direction='vertical'>
          <Title level={3} style={{ margin: '30px 0 0 0' }}>
            {title}
          </Title>
        </Space>
      </Container>
    </Header>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

NavBar.defaultProps = {
  title: 'The Shoppies'
};

export default NavBar;
