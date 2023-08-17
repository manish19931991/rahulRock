import { combineReducers,createStore } from "redux";
import { counterReducer } from "./Reducers1";
const Reducer = combineReducers({ 
       counterReducer,
     })
console.log(store);
export const store = createStore(Reducer);


