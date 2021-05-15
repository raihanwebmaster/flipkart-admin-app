import { authConstants } from "../actions/constants";

const initState = {
    name: "Riz"
};
export default (state = initState, action) => {
    console.log(state);
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            state ={
                ...state
            }
            break;
    }
    return state;

}