import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Container from './Container';
import { Layout, Divider, Row, Col, Alert } from 'antd';
import Search from '../Search';
import Movies from '../movies/Movies';
import Nominations from '../nominations/Nominations';

const { Content } = Layout;

const BodyContent = ({ movie: { error } }) => {
  return (
    <Fragment>
      <Content style={{ backgroundColor: 'white' }}>
        <Container>
          <Divider plain />

          {error !== null && <Alert message={error} type='warning' showIcon />}

          <Search />
          <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
            <Col xs={24} lg={12}>
              <Movies />
            </Col>
            <Col xs={24} lg={12}>
              <Nominations />
            </Col>
          </Row>
        </Container>
      </Content>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie
});

export default connect(mapStateToProps)(BodyContent);
