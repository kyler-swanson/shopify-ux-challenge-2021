import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteNomination } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import { Typography, Avatar, Space, Button, Tooltip, notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
const { Text } = Typography;

const NominationItem = ({ movie, deleteNomination }) => {
  const onDelete = () => {
    deleteNomination(movie);

    notification['info']({
      message: 'Nomination Removed',
      description: (
        <span>
          You've removed <strong>{movie.Title}</strong> as a nomination!
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
      <Tooltip title='Remove'>
        <Button
          danger
          style={{ float: 'right' }}
          shape='circle'
          onClick={onDelete}
          icon={<CloseOutlined />}
        />
      </Tooltip>
    </Fragment>
  );
};

NominationItem.propTypes = {
  movie: PropTypes.object.isRequired,
  deleteNomination: PropTypes.func.isRequired
};

export default connect(null, { deleteNomination })(NominationItem);
