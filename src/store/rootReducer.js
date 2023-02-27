import { combineReducers } from "redux";
import { operationsReducer } from "./operations";

// Root reducer
export const rootReducer = combineReducers({
    operationsReducer,
});
