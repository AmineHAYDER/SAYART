import React, { useReducer } from 'react';
import axios from 'axios';
import AdminContext from './adminContext';
import adminReducer from './adminReducer';

import {
    GARAGES_LOADED,
    SERVICES_LOADED,
    ARTICLES_LOADED
} from '../types';

const AdminState = props => {
    const initialState = {
        articles: '',
        services:'',
        garages: '',
        error: null
    };

    const [state, dispatch] = useReducer(adminReducer, initialState);
    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token
        }
    }



    //get all garges
    const getGarages = async () => {
        try {
            var res = await axios.get('http://localhost:5000/garage/all', config);
            dispatch({
                type: GARAGES_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
    }
    //add garage
    const addGarage = async data => {
        try {
             await axios.post('http://localhost:5000/garage/create',data, config);
            console.log("garage added")

        } catch (err) {

            console.log("garage not added")
        }
    }
    //get all garages
    const getServices = async () => {
        try {
            var res = await axios.get('http://localhost:5000/service/all', config);
            dispatch({
                type: SERVICES_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
    }
    //add garage
    const addService = async data => {
        try {
            await axios.post('http://localhost:5000/service/create',data, config);
            console.log("service added")

        } catch (err) {

            console.log("service not added")
        }
    }
    //get all articles
    const getArticles = async () => {
        try {
            var res = await axios.get('http://localhost:5000/article/all', config);
            dispatch({
                type: ARTICLES_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
    }
    //add article
    const addArticle = async data => {
        try {
            await axios.post('http://localhost:5000/article/create',data, config);
            console.log("article added")

        } catch (err) {

            console.log("article not added")
        }
    }

    return (
        <AdminContext.Provider
            value={{
                articles: state.articles,
                garages: state.garages,
                services:state.services,
                getGarages,
                addGarage,
                getServices,
                addService,
                getArticles,
                addArticle

            }}
        >
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminState;