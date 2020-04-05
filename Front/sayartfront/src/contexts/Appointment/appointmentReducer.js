import {

    LOCATION_SET

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOCATION_SET:
            localStorage.setItem('token', action.payload);
            console.log('location sucess');
            return {
                ...state,
                address: action.payload,
                loading: false
            };
        default: return state;
    }
}