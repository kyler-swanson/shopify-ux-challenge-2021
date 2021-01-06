import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Container from './Container';
import { Layout, Divider, Row, Col } from 'antd';
import Search from '../Search';
import Movies from '../movies/Movies';
import Nominations from '../nominations/Nominations';
import Confetti from 'react-confetti';

const { Content } = Layout;

const BodyContent = ({ movie: { nominations } }) => {
  return (
    <Fragment>
      {nominations.length === 5 && <Confetti />}
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
            <Col span={12}>
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
