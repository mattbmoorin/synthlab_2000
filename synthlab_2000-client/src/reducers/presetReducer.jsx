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
    case 'ADD_PRESET':
      return {
        ...state,
        presets: [...state.presets, action.preset],
      };
    default:
      return state;
  }
};

export default presetReducer;
