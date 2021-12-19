import { SENSING, INTUITION } from "./types";
const initialState = {
    count : 0,
}

const recognitionFn = (state=initialState, action) => {
    switch(action.type){
        case SENSING :
            return{
                ...state,
                count: state.count + 1
            }
        case INTUITION :
            return{
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}
export default recognitionFn