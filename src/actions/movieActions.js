import axios from 'axios';
import getApiKey from '../util/getApiKey';
import {
  SEARCH_MOVIES,
  CLEAR_MOVIES,
  ADD_NOMINATION,
  DELETE_NOMINATION,
  MOVIES_ERROR,
  SET_LOADING
} from '../actions/types';

export const searchMovies = (text) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${getApiKey()}&s=${text}`
    );

    if (text.length === 0) {
      dispatch({
        type: CLEAR_MOVIES
      });
    } else if ('Error' in res.data) {
      dispatch({
        type: MOVIES_ERROR,
        payload: res.data.Error
      });
    } else {
      dispatch({
        type: SEARCH_MOVIES,
        payload: res.data.Search
      });
    }
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err
    });
  }
};

export const addNomination = (movie) => (dispatch) => {
  dispatch({
    type: ADD_NOMINATION,
    payload: movie
  });
};

export const deleteNomination = (movie) => (dispatch) => {
  dispatch({
    type: DELETE_NOMINATION,
    payload: movie
  });
};

export const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING
  });
};
