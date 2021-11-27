import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import userTechsReducer from "./modules/techsRequistions/reducer";
import tokenReducer from "./modules/tokenLogin/reducer";


const reducers= combineReducers({
    token:tokenReducer,
    techs:userTechsReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store