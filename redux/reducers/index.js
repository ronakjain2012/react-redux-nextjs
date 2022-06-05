import { combineReducers } from "redux";
import user from "./user/user";
import api from "./api/api";

const rootReducer = combineReducers({
   user,
   api
});

export default rootReducer;
