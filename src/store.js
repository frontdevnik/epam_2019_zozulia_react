import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import callApi from "./services/callApi";
import rootReducer from "./reducers";

// Redux dev tools
let devTools = (f) => f;

const enableReduxDevtools =
  process.browser &&
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION__;

if (enableReduxDevtools) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument(callApi)), devTools)
);

export default store;
