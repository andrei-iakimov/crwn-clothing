import { UserActionTypes } from "./user.types";

//basics of action
/*
{
    type: ''
    payload: ''
}
*/
const INITIAL_STATE = {
    currentUser: null
}

//reducer gets every action that is fired
const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                //keep everythine else in the state
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;