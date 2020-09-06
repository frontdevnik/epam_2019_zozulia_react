import createActions from "../../helpers/createActions";

import {
  SORT_BY_LIKES,
  SORT_BY_RATING,
  RESET_FILTERS,
  SEARCH_BY_NAME,
} from "./constants";

export const sorByLikes = createActions(SORT_BY_LIKES);

export const sortByRating = createActions(SORT_BY_RATING);

export const resetSorting = createActions(RESET_FILTERS);

export const searchByName = createActions(SEARCH_BY_NAME);
