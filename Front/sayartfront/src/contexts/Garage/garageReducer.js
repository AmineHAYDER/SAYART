
import {
    GARAGE_LOADED,
    WHEELS_LOADED,
    APPOINTMENTS_LOADED,
    LOADING,
    NOT_LOADING,
    NEW_APPOINTMENT

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case  GARAGE_LOADED :
            return {
                ...state,
                garage: action.payload,
            };
        case  WHEELS_LOADED :
            return {
                ...state,
                wheels: action.payload,
            };
        case APPOINTMENTS_LOADED :
            console.log(action.payload)
            return {
                ...state,
                appointments: action.payload,
            };
        case NEW_APPOINTMENT :
            let app = state.appointments
            app.push(action.payload)

            return {
                ...state,
                appointments: app
            };
        case  "APPOINTMENT_CONFIRMED" :
            const appointments = state.appointments.map(app => {
                if ( app._id === action.payload) { app.state="Confirmed"}
                return app
            })
            return {
                ...state,
                appointments: appointments,
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