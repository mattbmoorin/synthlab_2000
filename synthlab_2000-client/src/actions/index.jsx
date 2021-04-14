export const getPresets = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch('http://localhost:3001/presets')
      .then((res) => res.json())
      .then((presets) => dispatch({ type: 'SET_PRESETS', presets }));
  };
};
