import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import chatReducer from "./chat-reducer";
import alertReducer from "./alert-reducer";

const rootReducer = combineReducers({
  chatReducer,
  alertReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);