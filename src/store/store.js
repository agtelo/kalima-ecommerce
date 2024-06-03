import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import { uiReducer } from "../reducers/uiReducer.js";
import thunk from "redux-thunk";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = configureStore(
  {
    reducer: {
      auth: authReducer,
      ui: uiReducer,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);
