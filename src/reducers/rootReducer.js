import { combineReducers } from "redux";
import todolistReducer from "./todolistReducer";

var rootReducer = combineReducers(
    {
        showtodo: todolistReducer
    }
)
export default rootReducer