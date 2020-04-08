import {

    LOCATION_SET

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOCATION_SET:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                address: action.payload,
                pages:{...state.pages,
                    address:{
                        state:false,
                        step:{
                            localisationStep:true
                        }
                    }
                }
            };
        default: return state;
    }
}