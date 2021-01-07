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

// Search omdbapi for movies
export const searchMovies = (text) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${getApiKey()}&s=${text}`
    );

    // clear movies list if search term is empty
    if (text.length === 0) {
      dispatch({
        type: CLEAR_MOVIES
      });
      // if we get an error from omdb, update the state with error (api doesn't return 400~ statuses!)
    } else if ('Error' in res.data) {
      dispatch({
        type: MOVIES_ERROR,
        payload: res.data.Error
      });
      // otherwise, update state with response
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

// Add nomination to the state
export const addNomination = (movie) => {
  // add nomination to saved nominations in localStorage
  let savedNominations =
    JSON.parse(localStorage.getItem('saved_nominations')) || [];

  savedNominations.push(movie);
  localStorage.setItem('saved_nominations', JSON.stringify(savedNominations));

  return {
    type: ADD_NOMINATION,
    payload: movie
  };
};

// Delete nomination from state
export const deleteNomination = (movie) => {
  // remove saved nomination from localStorage
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

// Replaces nomination state with ordered list when user re-arranges nominations
export const orderNominations = (movies) => {
  // update saved nomination in localStorage
  localStorage.setItem('saved_nominations', JSON.stringify(movies));
  return {
    type: ORDER_NOMINATIONS,
    payload: movies
  };
};

// Set loading to true (used to skeleton the movies card)
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
