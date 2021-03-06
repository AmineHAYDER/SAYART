import React, {useReducer} from 'react';
import axios from 'axios';
import UserContext from './userContext';
import userReducer from './userReducer';

import {
    RECOMMENDED_GARAGES,
    CAR_LOADED,
    LOADING,
    LOCATION_SET,
    NOT_LOADING,
    ADD_CAR,
    IMAGE_LOADED
} from '../types';

const UserState = props => {
    const initialState = {
        address: '',
        recommendedGarages:'',
        car: '',
        mileage: '',
        image: '',
        loading: false,
        error: null
    };

    const [state, dispatch] = useReducer(userReducer, initialState);
    const config = {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token
        }
    }


    //get recommended garages
    const getRecommendedGarages = async data => {
        try {
            var res = await axios.get('http://localhost:5000/garage/recommended', config);
            console.log(res.data)
            dispatch({
                type: RECOMMENDED_GARAGES,
                payload: res.data.data
            });


        } catch (err) {


        }
    }
    //decode back
    const setLocation = async data => {
        try {
            var res = await axios.post('http://localhost:5000/garage/decode/reverser', data, config);
            console.log(res.data.results[0])
            dispatch({
                type: LOCATION_SET,
                payload: res.data.results[0]
            });


        } catch (err) {


        }
    }
    //add car
    const addCar = async data => {

        try {
            await axios.post('http://localhost:5000/user/car', data, config)
            dispatch({
                type: ADD_CAR,
            })
        } catch (err) {
            console.log('msg'+err);
        }
    }
    //load car information
    const loadCar = async () => {


        try {
            const res = await axios.get('http://localhost:5000/user/car/', config);
            dispatch({
                type: CAR_LOADED,
                payload: res.data.data
            })
            return(true)
        } catch (err) {
            console.log(err + ' load user error');
            return(false)
        }
    }
    //update car information
    const updateCar = async data => {
        dispatch({
            type: LOADING
        })
        try {
            var res = await axios.put('http://localhost:5000/user/car', data, config);
            console.log(res.data.results[0])
            dispatch({
                type: CAR_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
        dispatch({
            type: NOT_LOADING
        })
    }
    //add an image
    const uploadImage = async data => {

        try {
            const res = await axios.post("http://localhost:5000/user/photo", data, config);
            console.log(res.data)
            dispatch({
                type: IMAGE_LOADED,
                payload: res.data.data
            })

        } catch (err) {


        }
    }


    return (
        <UserContext.Provider
            value={{
                car: state.car,
                mileage: state.mileage,
                loading: state.loading,
                error: state.error,
                address: state.address,
                image: state.image,
                recommendedGarages:state.recommendedGarages,
                getRecommendedGarages,
                loadCar,
                updateCar,
                setLocation,
                uploadImage,
                addCar,

            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;