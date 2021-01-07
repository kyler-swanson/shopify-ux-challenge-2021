import axios from 'axios';
import getApiKey from '../util/getApiKey';
import {
  SEARCH_MOVIES,
  CLEAR_MOVIES,
  ADD_NOMINATION,
  DELETE_NOMINATION,
  ORDER_NOMINATIONS,
  MOVIES_ERROR,
  SET_LOADING
} from '../actions/types';

export const searchMovies = (text) => async (dispatch) => {
  try {
    dispatch(setLoading());
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
        payload: { data: res.data.Search, text }
      });
    }
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err
    });
  }
};

export const addNomination = (movie) => {
  let savedNominations =
    JSON.parse(localStorage.getItem('saved_nominations')) || [];

  savedNominations.push(movie);
  localStorage.setItem('saved_nominations', JSON.stringify(savedNominations));

  return {
    type: ADD_NOMINATION,
    payload: movie
  };
};

export const deleteNomination = (movie) => {
  if (localStorage.getItem('saved_nominations')) {
    let savedNominations = JSON.parse(
      localStorage.getItem('saved_nominations')
    ).filter((m) => m.imdbID !== movie.imdbID);

    localStorage.setItem('saved_nominations', JSON.stringify(savedNominations));
  }

  return {
    type: DELETE_NOMINATION,
    payload: movie
  };
};

export const orderNominations = (movies) => {
  localStorage.setItem('saved_nominations', JSON.stringify(movies));
  return {
    type: ORDER_NOMINATIONS,
    payload: movies
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
