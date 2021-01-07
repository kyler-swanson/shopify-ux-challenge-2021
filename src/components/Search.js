import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions/movieActions';
import PropTypes from 'prop-types';

import { Input } from 'antd';

const { Search: AntSearch } = Input;

const Search = ({ searchMovies }) => {
  const onSearch = (value) => {
    searchMovies(value);
  };

  return (
    <Fragment>
      <AntSearch
        placeholder='Search movies...'
        allowClear
        enterButton
        onSearch={onSearch}
        size='large'
        style={{ marginTop: '20px' }}
      />
    </Fragment>
  );
};

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired
};

export default connect(null, { searchMovies })(Search);
