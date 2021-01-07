import React, { Fragment } from 'react';

import { Row, Col } from 'antd';

const Container = ({ children }) => {
  //@todo make more responsive
  return (
    <Fragment>
      <Row>
        <Col xs={{ span: 22, offset: 1 }} xl={{ span: 12, offset: 6 }}>
          {children}
        </Col>
      </Row>
    </Fragment>
  );
};

export default Container;
