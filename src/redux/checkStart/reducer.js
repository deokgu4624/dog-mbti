import { CHECK } from "./types";
const initialState = {
    count : 0,
}

const checkStart = (state=initialState, action) => {
    switch(action.type){
        case CHECK :
            return{
                ...state,
                count: state.count + 1
            }
        default: return state
    }
}
export default checkStart