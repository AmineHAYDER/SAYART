import {
    CAR_LOADED,
    LOADING, LOCATION_SET,
    NOT_LOADING,
    ADD_CAR,
    IMAGE_LOADED

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOCATION_SET:
            return {
                ...state,
                address: action.payload,
            };
        case CAR_LOADED:
            return {
                ...state,
                car: action.payload,
                mileage: action.payload.mileage,
            };
        case LOADING:
            return {
                ...state,
                loading: true,
            };
        case NOT_LOADING:
            return {
                ...state,
                loading: false,
            };
        case ADD_CAR:
            return {
                ...state,
                car: action.payload
            }
        case IMAGE_LOADED:
            return {
                ...state,
                image: action.payload
            }


        default: return state;
    }
}