import React from 'react';
import { connect } from 'react-redux';
import { deleteNomination } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import { Avatar, List, Button, Tooltip, Badge, notification } from 'antd';
import { CloseOutlined, EllipsisOutlined } from '@ant-design/icons';

const NominationItem = ({ id, movie, deleteNomination }) => {
  const { imdbID, Title, Year, Poster } = movie;

  const onDelete = () => {
    deleteNomination(movie);

    // show success notification on nom deleted
    notification['info']({
      message: 'Nomination Removed',
      description: (
        <span>
          You've removed <strong>{Title}</strong> from the nominations!
        </span>
      )
    });
  };

  // button used to remove nom
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
    <List.Item
      className='draggable'
      draggable
      actions={[removeButton]}
      style={{ padding: '15px' }}
    >
      {/* used to implicate that list item is draggable */}
      <EllipsisOutlined
        rotate={90}
        style={{ fontSize: '18px', marginRight: '10px' }}
      />
      <List.Item.Meta
        avatar={
          <Badge count={id} style={{ backgroundColor: '#52c41a' }}>
            <Avatar src={Poster} />
          </Badge>
        }
        title={
          <a
            target='_blank'
            rel='noreferrer'
            href={`https://www.imdb.com/title/${imdbID}`}
          >
            {Title}
          </a>
        }
        description={Year}
      />
    </List.Item>
  );
};

NominationItem.propTypes = {
  id: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
  deleteNomination: PropTypes.func.isRequired
};

export default connect(null, { deleteNomination })(NominationItem);
