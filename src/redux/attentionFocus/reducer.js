import { EXTRAVERSION, INTROVERSION } from "./types";
const initialState = {
    count : 0,
}

const attentionFocus = (state=initialState, action) => {
    switch(action.type){
        case EXTRAVERSION :
            return{
                ...state,
                count: state.count + 1
            }
        case INTROVERSION :
            return{
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}
export default attentionFocus