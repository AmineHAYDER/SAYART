import React, { useReducer } from 'react';
import axios from 'axios';
import AdminContext from './adminContext';
import adminReducer from './adminReducer';

import {
    GARAGE_SET,
    ARTICLE_SET,
    GARAGES_LOADED,
    SERVICES_LOADED,
    ARTICLES_LOADED,
    WHEELS_LOADED,
    FILTERS_LOADED,
    OILS_LOADED
} from '../types';

const AdminState = props => {
    const initialState = {
        garage:'',
        article:{
            data:"",
            articleType:""
        },
        garages: '',
        services:'',
        articles: '',
        filters:'',
        wheels: '',
        oils:'',
        error: null
    };

    const [state, dispatch] = useReducer(adminReducer, initialState);
    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token
        }
    }


    const setGarage = async (data) => {
        try {
            dispatch({
                type: GARAGE_SET,
                payload: data
            })

        } catch (err) {


        }
    }
    const setArticle = async (data,type) => {
        try {
            dispatch({
                type: ARTICLE_SET,
                payload: data,
                articleType:type
            })

        } catch (err) {


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

    const getWheels = async () => {
        try {
            var res = await axios.get('http://localhost:5000/wheel/all', config);
            dispatch({
                type: WHEELS_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
    }
    //add oil
    const addWheel = async data => {
        try {
            await axios.post('http://localhost:5000/wheel/create',data, config);
            return true

        } catch (err) {
            return false
        }
    }

    const getFilters = async () => {
        try {
            var res = await axios.get('http://localhost:5000/filter/all', config);
            dispatch({
                type: FILTERS_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
    }
    //add oil
    const addFilter = async data => {
        try {
            await axios.post('http://localhost:5000/filter/create',data, config);
            console.log("article added")

        } catch (err) {

            console.log("article not added")
        }
    }

    const getOils = async () => {
        try {
            var res = await axios.get('http://localhost:5000/oil/all', config);
            dispatch({
                type: OILS_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
    }
    //add oil
    const addOil = async data => {
        try {
            await axios.post('http://localhost:5000/oil/create',data, config);
            console.log("article added")

        } catch (err) {

            console.log("article not added")
        }
    }


    const addToStock = async data => {
        try {
            await axios.post('http://localhost:5000/stock/create',data, config);
            return(true)

        } catch (err) {

            return(false)
        }
    }

    return (
        <AdminContext.Provider
            value={{
                garage:state.garage,
                article:state.article,
                garages: state.garages,
                services:state.services,
                articles: state.articles,
                wheels:state.wheels,
                filters:state.filters,
                oils:state.oils,
                setGarage,
                setArticle,
                getGarages,
                addGarage,
                getServices,
                addService,
                getArticles,
                addArticle,
                getWheels,
                addWheel,
                getFilters,
                addFilter,
                getOils,
                addOil,
                addToStock

            }}
        >
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminState;