import React, { Fragment } from 'react';

import { Input } from 'antd';

const { Search: AntSearch } = Input;

const Search = () => {
  const onSearch = (value) => {
    console.log(value);
  };

  return (
    <Fragment>
      <AntSearch
        placeholder='Search movies...'
        allowClear
        enterButton
        onSearch={onSearch}
        size='large'
      />
    </Fragment>
  );
};

export default Search;
