import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Card, Empty, Space } from 'antd';
import MovieItem from './MovieItem';

const Movies = ({ movie: { movies, loading } }) => {
  return (
    <Fragment>
      <Card title='Movies' loading={loading}>
        {movies === null ? (
          <Empty description='No movies found...' />
        ) : (
          <Space direction='vertical' style={{ width: '100%' }}>
            {movies.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
          </Space>
        )}
      </Card>
    </Fragment>
  );
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.movie
});

export default connect(mapStateToProps)(Movies);
