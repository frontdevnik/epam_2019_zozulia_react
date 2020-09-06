import { SHOW_ACTOR, SHOW_ACTOR_ERROR, REMOVE_ACTOR } from "../constants";
import { showActor, showActorError } from "../selectors";

const initialState = {
  actor: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ACTOR:
      return showActor(state, action.payload);
    case SHOW_ACTOR_ERROR:
      return showActorError(state, action.payload);
    case REMOVE_ACTOR:
      return initialState;
    default:
      return state;
  }
};
