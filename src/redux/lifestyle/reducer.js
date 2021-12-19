import { PERCEIVING, JUDGING } from "./types";
const initialState = {
    count : 0,
}

const lifestyle = (state=initialState, action) => {
    switch(action.type){
        case JUDGING :
            return{
                ...state,
                count: state.count + 1
            }
        case PERCEIVING :
            return{
                ...state,
                count: state.count - 1
            }
        default: return state
    }
}
export default lifestyle