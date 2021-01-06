import React, { Fragment } from 'react';

import { Card } from 'antd';

const Movies = () => {
  return (
    <Fragment>
      <Card title='Movies' loading={true}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Fragment>
  );
};

export default Movies;
