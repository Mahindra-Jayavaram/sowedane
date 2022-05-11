import { reducer as registerReducer } from "./registration/reducer";
import { reducer as loginReducer } from "./login/reducer";
import { reducer as userReducer } from "./user/reducer";

import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const root_reducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  user: userReducer,
});

export const Store = createStore(
  root_reducer,
  compose(
    applyMiddleware(thunk),
  )
);
