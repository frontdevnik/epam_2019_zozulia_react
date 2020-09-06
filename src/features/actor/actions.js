import createActions from "../../helpers/createActions";

import { SHOW_ACTOR, SHOW_ACTOR_ERROR, REMOVE_ACTOR } from "./constants";

const showActor = createActions(SHOW_ACTOR);

const showActorError = createActions(SHOW_ACTOR_ERROR);

export const fetchingActor = (id) => async (dispatch, _, api) => {
  try {
    const { data } = await api(`actors/${id}`);
    dispatch(showActor(data));
  } catch (error) {
    dispatch(showActorError(error));
  }
};

export const removeActor = createActions(REMOVE_ACTOR);
