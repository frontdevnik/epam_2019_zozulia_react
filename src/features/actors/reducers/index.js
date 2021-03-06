import { GET_ACTORS, ACTORS_ERROR } from "../constants";
import { getActors, getActorsError } from "../selectors";

const initialState = {
  actors: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ACTORS:
      return getActors(state, action);
    case ACTORS_ERROR:
      return getActorsError(state, action);
    default:
      break;
  }
  return state;
};
