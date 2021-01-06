import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Typography, Avatar, Space, Button, Tooltip } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
const { Text } = Typography;

const MovieItem = ({ movie }) => {
  return (
    <Fragment>
      <Space align='center'>
        <Avatar src={movie.Poster} />
        <Text ellipsis type='secondary'>
          <Text>{movie.Title}</Text> {movie.Year}
        </Text>
      </Space>
      <Tooltip title='Nominate'>
        <Button
          type='primary'
          style={{ float: 'right' }}
          shape='circle'
          icon={<LikeOutlined />}
        />
      </Tooltip>
    </Fragment>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieItem;
