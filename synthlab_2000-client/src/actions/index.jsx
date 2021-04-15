export const getPresets = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });
    fetch('http://localhost:3001/presets')
      .then((res) => res.json())
      .then((presets) => dispatch({ type: 'SET_PRESETS', presets }));
  };
};

export const addPreset = (preset, history) => {
  return (dispatch) => {
    fetch('http://localhost:3001/presets', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ preset }),
    })
      .then((res) => res.json())
      .then((preset) => {
        dispatch({ type: 'ADD_PRESET', preset });
        history.push('/index/new');
      });
  };
};
