import React, { Fragment } from 'react';
import { Typography, Layout, Space } from 'antd';
import Container from './Container';

const { Header } = Layout;
const { Title } = Typography;

const NavBar = () => {
  return (
    <Fragment>
      <Header style={{ backgroundColor: 'white' }}>
        <Container>
          <Space direction='vertical'>
            <Title level={3}>The Shoppies</Title>
          </Space>
        </Container>
      </Header>
    </Fragment>
  );
};

export default NavBar;
