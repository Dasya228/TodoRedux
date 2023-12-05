import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import {TodoReducer} from "./TodoReducer";


export const store = createStore(
    TodoReducer,
    composeWithDevTools(applyMiddleware()),
)