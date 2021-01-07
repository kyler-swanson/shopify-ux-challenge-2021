import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Empty, List } from 'antd';
import NominationItem from './NominationItem';

const Nominations = ({ nominations }) => {
  return (
    <Card title='Nominations'>
      {nominations.length === 0 ? (
        <Empty description='No nominations...' />
      ) : (
        <List
          itemLayout='horizontal'
          dataSource={nominations}
          renderItem={(movie) => <NominationItem movie={movie} />}
        />
      )}
    </Card>
  );
};

Nominations.propTypes = {
  nominations: PropTypes.array
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations
});

export default connect(mapStateToProps)(Nominations);
