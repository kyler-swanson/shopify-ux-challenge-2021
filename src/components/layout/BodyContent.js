import React, { Fragment } from 'react';

import Container from './Container';
import { Layout } from 'antd';

const { Content } = Layout;

const BodyContent = () => {
  return (
    <Fragment>
      <Content>
        <Container>Hello</Container>
      </Content>
    </Fragment>
  );
};

export default BodyContent;
