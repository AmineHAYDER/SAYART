import {
    GARAGES_LOADED,
    SERVICES_LOADED,
    ARTICLES_LOADED

} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GARAGES_LOADED:
            return {
                ...state,
                garages: action.payload,
            };
        case SERVICES_LOADED:
            return {
                ...state,
                services: action.payload,
            };
        case ARTICLES_LOADED:
            return {
                ...state,
                articles: action.payload,
            };



        default: return state;
    }
}