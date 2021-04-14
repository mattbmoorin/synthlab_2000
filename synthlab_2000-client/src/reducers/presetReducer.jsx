const initialState = {
  presets: [],
  loading: true,
};

const presetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        laoding: true,
      };
    case 'SET_PRESETS':
      return {
        ...state,
        loading: false,
        presets: action.presets,
      };
    default:
      return state;
  }
};

export default presetReducer;
