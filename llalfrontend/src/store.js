import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import Reducer from "./reducer/Reducer";

const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
