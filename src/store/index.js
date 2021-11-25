import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import tokenReducer from "./modules/tokenLogin/reducer";


const reducers= combineReducers({
    token:tokenReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store