import axios from 'axios';
import getApiKey from '../util/getApiKey';
import {
  SEARCH_MOVIES,
  ADD_NOMINATION,
  DELETE_NOMINATION,
  MOVIES_ERROR,
  SET_LOADING
} from '../actions/types';

export const searchMovies = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(`/?apikey=${getApiKey()}&s=${text}`);

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.Search
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err.response
    });
  }
};

export const addNomination = (movie) => {
  return {
    type: ADD_NOMINATION,
    payload: movie
  };
};

export const deleteNomination = (movie) => {
  return {
    type: DELETE_NOMINATION,
    payload: movie
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
