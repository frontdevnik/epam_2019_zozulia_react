import { SHOW_ACTOR } from './types';

const initialState = {
  actor: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ACTOR:
      return {
        ...state,
        actor: action.payload,
      };
    default:
      return state;
  }
};
