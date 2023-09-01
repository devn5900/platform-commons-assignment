import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as productReducer } from "./products/reducer";
import {reducer as cartReducer} from '../redux/cart/redcuer'
const rootRedcuer = combineReducers({
    productReducer,cartReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootRedcuer,
  composeEnhancer(applyMiddleware(thunk))
);
