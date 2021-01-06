import {
  SEARCH_MOVIES,
  ADD_NOMINATION,
  DELETE_NOMINATION,
  MOVIES_ERROR,
  SET_LOADING
} from '../actions/types';

const initialState = {
  movies: null,
  nominations: [],
  loading: false,
  error: null
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
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
          (movie) => movie.id !== action.payload.id
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
        error: action.payload
      };
    default:
      return state;
  }
};