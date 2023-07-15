// Ovo je za export da mozes da pristupis svim reducerima.
import { combineReducers } from "redux";

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  todos,
  visibilityFilter
});