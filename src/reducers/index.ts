import { combineReducers } from "@reduxjs/toolkit";
import {TodoReducer} from "./oldSchemeTodoReducer";

const routeReducer = combineReducers({
    todos: TodoReducer
});

export type RootState = ReturnType<typeof routeReducer>;

export default routeReducer;