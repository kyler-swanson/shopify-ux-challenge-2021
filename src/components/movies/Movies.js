import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Typography, Card, Empty, Space } from 'antd';
import MovieItem from './MovieItem';

const { Text } = Typography;

const Movies = ({ movie: { movies, search, loading } }) => {
  const cardTitle = (
    <>
      Movies
      {search.length > 0 && (
        <Text type='secondary' style={{ fontSize: '14px' }}>
          <br />
          Showing results for "{search}"
        </Text>
      )}
    </>
  );
  return (
    <Fragment>
      <Card title={cardTitle} loading={loading}>
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
