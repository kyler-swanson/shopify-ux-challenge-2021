// eslint-disable-next-line
export default () => {
  if (process.env.NODE_ENV !== 'production') {
    return process.env.REACT_APP_OMDB_API_KEY;
  } else {
    return process.env.OMDB_API_KEY;
  }
};
