const IS_LOADING_COMPLETE = 'main/IS_LOADING_COMPLETE';

export const changeLoadingStatus = payload => ({ type: IS_LOADING_COMPLETE, payload });

const initialState = {
  isLoadingComplete: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING_COMPLETE:
      return { ...state, isLoadingComplete: action.payload };
    default:
      return state;
  }
};
