import { combineReducers } from "redux";
import { message1Reducer, message2Reducer } from "./Reducer";
const Rootreducer= combineReducers({
    message1Reducer,
    message2Reducer
})

export default Rootreducer