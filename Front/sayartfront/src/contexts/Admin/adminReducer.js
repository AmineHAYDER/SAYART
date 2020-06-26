import {
    GARAGE_SET,
    ARTICLE_SET,
    GARAGES_LOADED,
    SERVICES_LOADED,
    ARTICLES_LOADED,
    FILTERS_LOADED,
    OILS_LOADED,
    WHEELS_LOADED
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GARAGE_SET:
            return {
                ...state,
                garage: action.payload,
            };
        case ARTICLE_SET:
            return {
                ...state,
                article:
                    {
                        articleType:action.articleType,
                        data:action.payload
                } ,
            };
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
        case WHEELS_LOADED:
            return {
                ...state,
                wheels: action.payload,
            };
        case FILTERS_LOADED:
            return {
                ...state,
                filters: action.payload,
            };
        case OILS_LOADED:
            return {
                ...state,
                oils: action.payload,
            };


        default: return state;
    }
}