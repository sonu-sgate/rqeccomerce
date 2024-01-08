
import {applyMiddleware, combineReducers,legacy_createStore} from "redux"
import {thunk }from "redux-thunk"
const rootreducers=combineReducers({})
export const store=legacy_createStore(rootreducers,applyMiddleware(thunk))