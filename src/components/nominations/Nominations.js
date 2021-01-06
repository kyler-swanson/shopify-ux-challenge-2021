import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Empty, Space } from 'antd';
import NominationItem from './NominationItem';

const Nominations = ({ nominations }) => {
  return (
    <Fragment>
      <Card title='Nominations'>
        {nominations.length === 0 ? (
          <Empty description='No nominations...' />
        ) : (
          <Space direction='vertical' style={{ width: '100%' }}>
            {nominations.map((movie) => (
              <NominationItem key={movie.imdbID} movie={movie} />
            ))}
          </Space>
        )}
      </Card>
    </Fragment>
  );
};

Nominations.propTypes = {
  nominations: PropTypes.array
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations
});

export default connect(mapStateToProps)(Nominations);
