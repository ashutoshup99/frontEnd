import loggedReducer from "./isLogged";
import counterReducer from "./counters";
import { combineReducers } from "redux";
const allReducer = combineReducers({
  mycount: counterReducer,
  mylog: loggedReducer,
});
export default allReducer;
