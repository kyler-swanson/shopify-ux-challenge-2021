import React, { Fragment } from 'react';

import Container from './Container';
import { Layout, Divider, Row, Col } from 'antd';
import Search from '../Search';
import Movies from '../movies/Movies';

const { Content } = Layout;

const BodyContent = () => {
  return (
    <Fragment>
      <Content style={{ backgroundColor: 'white' }}>
        <Container>
          <Divider plain />
          <Search />
          <Row
            gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            style={{ marginTop: '20px' }}
          >
            <Col span={12}>
              <Movies />
            </Col>
            <Col span={12}>Hello</Col>
          </Row>
        </Container>
      </Content>
    </Fragment>
  );
};

export default BodyContent;
