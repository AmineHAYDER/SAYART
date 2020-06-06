import {
    APPOINTMENTS_LOADED,
    CAR_LOADED,
    LOCATION_SET,
    LOADING,
    NOT_LOADING,
    APPOINTMENTS_GARAGES_LOADED

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOCATION_SET :
        return {
            ...state,
            address: action.payload,
            pages:{
                ...state.pages,
                address:{
                    state:false,
                    step:{
                        localisationStep:true
                    }
                }
            },
        };
        case APPOINTMENTS_LOADED :
            return {
                ...state,
                appointments: action.payload,
            };
        case CAR_LOADED :
            return {
                ...state,
                car: action.payload,
                mileage:action.payload.mileage,
            };
        case APPOINTMENTS_GARAGES_LOADED :
            return {
                ...state,
                appointmentGarages: action.payload,
            };
        case 'CheckAvailableGarage' :

            return {
                ...state,
                availableGarage: action.payload,
            };
        case 'setChosenService' :
            return {
                ...state,
                chosenService: action.payload,
            };
        case 'resetAvailableGarage' :
            return {
                ...state,
                availableGarage: '',
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