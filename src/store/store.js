import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

// Store
export default configureStore({
    reducer: rootReducer,
});
