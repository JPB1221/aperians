import { combineReducers } from "redux";
import { homeReducer } from "./homeReducer";

const CombinedReducers = combineReducers({
  home: homeReducer,
});

export default CombinedReducers;
