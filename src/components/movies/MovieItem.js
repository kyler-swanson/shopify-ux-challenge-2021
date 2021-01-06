import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addNomination } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import { Typography, Avatar, Space, Button, Tooltip, notification } from 'antd';
import { LikeOutlined, SmileOutlined } from '@ant-design/icons';
const { Text } = Typography;

const MovieItem = ({ movie, nominations, addNomination }) => {
  const isNominated = nominations.some((m) => m.imdbID === movie.imdbID);

  const onNomination = () => {
    addNomination(movie);

    notification['success']({
      message: 'Movie Nominated',
      description: (
        <span>
          You've nominated <strong>{movie.Title}</strong> for the Shoppies!
        </span>
      )
    });
  };

  return (
    <Fragment>
      <Space align='center'>
        <Avatar src={movie.Poster} />
        <Text type='secondary'>
          <Text>{movie.Title}</Text> {movie.Year}
        </Text>
      </Space>
      <Tooltip title={isNominated ? 'Nominated!' : 'Nominate'}>
        <Button
          type='primary'
          style={{ float: 'right' }}
          shape='circle'
          onClick={onNomination}
          disabled={isNominated}
          icon={isNominated ? <SmileOutlined /> : <LikeOutlined />}
        />
      </Tooltip>
    </Fragment>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
  nominations: PropTypes.array,
  addNomination: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations
});

export default connect(mapStateToProps, { addNomination })(MovieItem);