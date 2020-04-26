import {
    APPOINTMENTS_LOADED,
    LOADING,
    NOT_LOADING

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case APPOINTMENTS_LOADED :
            return {
                ...state,
                appointments: action.payload,
            };
        case LOADING :
            return {
                ...state,
                loading: true,
            };
        case NOT_LOADING :
            return {
                ...state,
                loading: false,
            };


        default: return state;
    }
}