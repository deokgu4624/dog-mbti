import { FEELING, THINKING } from "./types";
const initialState = {
    count : 0,
}

const judgementFn = (state=initialState, action) => {
    switch(action.type){
        case THINKING :
            return{
                ...state,
                count: state.count + 1
            }
        case FEELING :
            return{
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}
export default judgementFn