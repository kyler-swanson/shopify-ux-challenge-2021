import React from 'react';
import { connect } from 'react-redux';
import { deleteNomination } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import { Avatar, List, Button, Tooltip, notification } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const NominationItem = ({ movie, deleteNomination }) => {
  const { imdbID, Title, Year, Poster } = movie;

  const onDelete = () => {
    deleteNomination(movie);

    notification['info']({
      message: 'Nomination Removed',
      description: (
        <span>
          You've removed <strong>{Title}</strong> from the nominations!
        </span>
      )
    });
  };

  const removeButton = (
    <Tooltip title='Remove'>
      <Button
        danger
        style={{ float: 'right' }}
        shape='circle'
        onClick={onDelete}
        icon={<CloseOutlined />}
      />
    </Tooltip>
  );

  return (
    <List.Item actions={[removeButton]}>
      <List.Item.Meta
        avatar={<Avatar src={Poster} />}
        title={<a href={`https://www.imdb.com/title/${imdbID}`}>{Title}</a>}
        description={Year}
      />
    </List.Item>
  );
};

NominationItem.propTypes = {
  movie: PropTypes.object.isRequired,
  deleteNomination: PropTypes.func.isRequired
};

export default connect(null, { deleteNomination })(NominationItem);
