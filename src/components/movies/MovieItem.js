import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { addNomination } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import {
  Typography,
  Avatar,
  Space,
  Button,
  Tooltip,
  notification,
  Modal
} from 'antd';
import { LikeOutlined, SmileOutlined, FireTwoTone } from '@ant-design/icons';
const { Text } = Typography;

const MovieItem = ({ movie, nominations, addNomination }) => {
  const { imdbID, Title, Year, Poster } = movie;
  const isNominated = nominations.some((m) => m.imdbID === imdbID);

  const onNomination = () => {
    addNomination(movie);

    if (nominations.length + 1 === 5) {
      Modal.info({
        icon: <FireTwoTone twoToneColor='#ffae00' />,
        title: 'And the picks are in...',
        content: "You've nominated 5 movies for The Shoppies!",
        zIndex: 5000
      });
    }

    notification['success']({
      message: 'Movie Nominated',
      description: (
        <span>
          You've nominated <strong>{Title}</strong> for the Shoppies!
        </span>
      )
    });
  };

  return (
    <Fragment>
      <Space align='center'>
        <Avatar src={Poster} />
        <Text ellipsis={{ rows: 0 }} type='secondary'>
          <Text>{Title}</Text> {Year}
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
