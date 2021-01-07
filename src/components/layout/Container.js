import React from 'react';

import { Row, Col } from 'antd';

const Container = ({ children }) => {
  return (
    <Row>
      <Col xs={{ span: 22, offset: 1 }} xl={{ span: 12, offset: 6 }}>
        {children}
      </Col>
    </Row>
  );
};

export default Container;
