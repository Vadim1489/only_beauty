import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";


const rootReducers = combineReducers({

});


export const store = createStore(rootReducers, applyMiddleware(thunk));