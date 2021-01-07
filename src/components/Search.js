import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from '../actions/movieActions';
import PropTypes from 'prop-types';

import { Input } from 'antd';

const { Search: AntSearch } = Input;

const Search = ({ searchMovies }) => {
  const text = useRef('');

  const onSearch = (value) => {
    text.current.blur(); // to hide keyboard on mobile when term is searched
    searchMovies(value);
  };

  return (
    <AntSearch
      placeholder='Search movies...'
      allowClear
      enterButton
      onSearch={onSearch}
      size='large'
      ref={text}
      style={{ marginTop: '20px' }}
    />
  );
};

Search.propTypes = {
  searchMovies: PropTypes.func.isRequired
};

export default connect(null, { searchMovies })(Search);
