import React from 'react';
import { connect } from 'react-redux';
import { addNomination } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import { Avatar, List, Button, Tooltip, notification } from 'antd';
import { LikeOutlined, SmileOutlined } from '@ant-design/icons';

const MovieItem = ({ movie, nominations, addNomination }) => {
  const { imdbID, Title, Year, Poster } = movie;
  const isNominated = nominations.some((m) => m.imdbID === imdbID);

  const onNomination = () => {
    addNomination(movie);

    notification['success']({
      message: 'Movie Nominated',
      description: (
        <span>
          You've nominated <strong>{Title}</strong> for the Shoppies!
        </span>
      )
    });
  };

  const nominationButton = (
    <Tooltip title={isNominated ? 'Nominated!' : 'Nominate'}>
      <Button
        type='primary'
        style={{ float: 'right' }}
        shape='circle'
        onClick={onNomination}
        disabled={isNominated || nominations.length >= 5}
        icon={isNominated ? <SmileOutlined /> : <LikeOutlined />}
      />
    </Tooltip>
  );

  return (
    <List.Item actions={[nominationButton]}>
      <List.Item.Meta
        avatar={<Avatar src={Poster} />}
        title={<a href={`https://www.imdb.com/title/${imdbID}`}>{Title}</a>}
        description={Year}
      />
    </List.Item>
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
