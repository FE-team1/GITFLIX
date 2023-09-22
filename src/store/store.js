import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { rootReducer } from "../reducer";

// redux(x) -> redux-tool-kit
export const store = createStore(
  rootReducer,
  // reducer (switch(action.type)) => rootReducer
  process.env.NODE_ENV === "development" &&
    composeWithDevTools(applyMiddleware(logger))
);
