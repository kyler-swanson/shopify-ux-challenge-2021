import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Typography, Card, Empty, List } from 'antd';
import MovieItem from './MovieItem';

const { Text } = Typography;

const Movies = ({ movie: { movies, search, loading } }) => {
  // determine secondary title depending on movies state
  const cardTitle = (
    <>
      Movies
      {movies !== null && search.length > 0 ? (
        <Text type='secondary' style={{ fontSize: '14px' }}>
          <br />
          Showing results for "{search}"
        </Text>
      ) : (
        movies !== null &&
        search.length === 0 &&
        movies.length !== 0 && (
          <Text type='secondary' style={{ fontSize: '14px' }}>
            <br />
            Showing popular movies...
          </Text>
        )
      )}
    </>
  );

  return (
    <Card title={cardTitle} loading={loading}>
      {movies === null ? (
        <Empty description='No movies found...' />
      ) : (
        <List
          itemLayout='horizontal'
          dataSource={movies}
          renderItem={(movie) => <MovieItem movie={movie} />}
        />
      )}
    </Card>
  );
};

Movies.propTypes = {
  movie: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  movie: state.movie
});

export default connect(mapStateToProps)(Movies);
