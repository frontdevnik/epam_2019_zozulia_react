import { ALLOW_LOGIN } from '../constants';

const initialState = {
  isLoggin: false,
};

export default (state = initialState, { type }) => {
  switch (type) {
    case ALLOW_LOGIN:
      return {
        isLoggin: !state.isLoggin,
      };
    default:
      return state;
  }
};
