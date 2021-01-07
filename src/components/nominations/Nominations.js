import React from 'react';
import { connect } from 'react-redux';
import { orderNominations } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import ReactDragListView from 'react-drag-listview';
import { Typography, Card, Empty, List, Button, Tooltip } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import NominationItem from './NominationItem';
import { showNominations } from './NominationModal';

const { Text } = Typography;

const Nominations = ({ nominations, orderNominations }) => {
  const submitNominations = () => {
    showNominations(nominations);
  };

  // adapted from https://codesandbox.io/s/50w9wz7j4x
  const onDragEnd = (fromIndex, toIndex) => {
    if (toIndex < 0) return; // prevent item from being moved to a negative index

    const currNominations = [...nominations]; // create duplicate of state to prevent mutation
    const newNom = currNominations.splice(fromIndex, 1)[0];
    currNominations.splice(toIndex, 0, newNom);
    orderNominations(currNominations);
  };

  const cardTitle = (
    <>
      Nominations{' '}
      <Text type='secondary' style={{ fontSize: '14px' }}>
        ({nominations.length} / 5)
      </Text>
    </>
  );

  return (
    <Card
      title={cardTitle}
      actions={[
        <Tooltip title='Submit Nominations'>
          <Button
            type='link'
            onClick={submitNominations}
            disabled={nominations.length < 5}
            icon={<SendOutlined />}
            block
          ></Button>
        </Tooltip>
      ]}
    >
      {nominations.length === 0 ? (
        <Empty description='No nominations...' />
      ) : (
        <ReactDragListView
          nodeSelector='.ant-list-item.draggable'
          onDragEnd={onDragEnd}
        >
          <List
            itemLayout='horizontal'
            dataSource={nominations}
            renderItem={(movie) => (
              <NominationItem
                id={nominations.indexOf(movie) + 1}
                movie={movie}
              />
            )}
          />
        </ReactDragListView>
      )}
    </Card>
  );
};

Nominations.propTypes = {
  nominations: PropTypes.array,
  orderNominations: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  nominations: state.movie.nominations
});

export default connect(mapStateToProps, { orderNominations })(Nominations);
