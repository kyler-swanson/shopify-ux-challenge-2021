import {
  SEARCH_MOVIES,
  CLEAR_MOVIES,
  ADD_NOMINATION,
  DELETE_NOMINATION,
  MOVIES_ERROR,
  SET_LOADING
} from '../actions/types';
import getPopularMovies from '../util/getPopularMovies';

const initialState = {
  movies: getPopularMovies,
  nominations: [],
  search: '',
  loading: false,
  error: null
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload.data,
        search: action.payload.text,
        loading: false,
        error: null
      };
    case CLEAR_MOVIES:
      return {
        ...state,
        movies: getPopularMovies,
        search: '',
        error: null,
        loading: false
      };
    case ADD_NOMINATION:
      return {
        ...state,
        nominations: [...state.nominations, action.payload]
      };
    case DELETE_NOMINATION:
      return {
        ...state,
        nominations: state.nominations.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        )
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case MOVIES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        movies: null,
        search: '',
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
