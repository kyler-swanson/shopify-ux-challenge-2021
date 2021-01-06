import React, { Fragment } from 'react';

import { Row, Col } from 'antd';

const Container = ({ children }) => {
  return (
    <Fragment>
      <Row>
        <Col span={12} offset={6}>
          {children}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Container;
