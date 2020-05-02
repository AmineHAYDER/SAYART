import {
    CAR_LOADED,
    LOADING, LOCATION_SET,
    NOT_LOADING,

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOCATION_SET :
            return {
                ...state,
                address: action.payload,
            };
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