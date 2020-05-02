import {
    CAR_LOADED,
    LOADING,
    NOT_LOADING,

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case CAR_LOADED :
            return {
                ...state,
                car: action.payload,
                mileage:action.payload.mileage,
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