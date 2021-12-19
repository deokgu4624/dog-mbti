import { combineReducers } from "redux";
import attentionFocus from './attentionFocus/reducer';
import recognitionFn from './recognitionFn/reducer'
import judgementFn from './judgementFn/reducer'
import lifestyle from './lifestyle/reducer'
import checkStart from './checkStart/reducer'

const rootReducer = combineReducers({
    attentionFocus,
    recognitionFn,
    judgementFn,
    lifestyle,
    checkStart
})

export default rootReducer