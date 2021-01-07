import React from 'react';
import { connect } from 'react-redux';
import { orderNominations } from '../../actions/movieActions';
import PropTypes from 'prop-types';

import ReactDragListView from 'react-drag-listview';
import { Typography, Card, Empty, List } from 'antd';
import NominationItem from './NominationItem';

const { Text } = Typography;

const Nominations = ({ nominations, orderNominations }) => {
  const onDragEnd = (fromIndex, toIndex) => {
    if (toIndex < 0) return;

    const currNominations = [...nominations];
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
    <Card title={cardTitle}>
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
