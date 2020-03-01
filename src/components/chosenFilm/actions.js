import { DELETE_MOVIE, SHOW_ACTOR } from "./types"

export const deleteMovie = (payload) => ({
  type: DELETE_MOVIE,
  payload
});

export const showActorInfo = (payload) => ({
  type: SHOW_ACTOR,
  payload
});