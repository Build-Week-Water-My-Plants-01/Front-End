import { axiosWithAuth } from '../utils/axiosWithAuth';
import { axiosFormData } from '../utils/axiosFormData';

const userID = window.localStorage.getItem('userID');

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchPlants = () => dispatch => {
    dispatch({ type: FETCH_DATA })
    axiosWithAuth()
        .get(`users/${userID}`)
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data.plants});
        })
        .catch(err => {
            console.log('err in fetching plants', err);
            dispatch({ type: FETCH_FAIL, payload: err});
        })  
}

export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";
export const editPlant = (newPlant) => dispatch => {
    dispatch({ type: EDIT_DATA});
    //axios call goes here
    axiosWithAuth()
            .put(`users/${userID}/plants/${newPlant.id}`, newPlant)
            .then(res => {
                console.log('put request on edit',res);                                    
            })
            .catch(err => console.log('error updating', err))
}

export const ADD_DATA = "ADD_DATA";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";
export const addPlant = (formData) => dispatch => {
    dispatch({ type: ADD_DATA});
    axiosFormData()
        .post(`users/${userID}/plants/`, formData)
        .then(res => {
            console.log('adding res', res);
            dispatch({ type: ADD_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('this wasnt passed',formData);
            console.log('error adding new plan',err);
        })
}

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";
export const deletePlants = (editPlant) => dispatch => {
    dispatch({ type: DELETE_DATA});
    axiosWithAuth()
        .delete(`users/${userID}/plants/${editPlant.id}`)
        .then(res => {
            console.log('success deleting', res);
            dispatch({ type: DELETE_SUCCESS });
        })
        .catch(err => {
            console.log('error deleting', err);
            dispatch({ type: DELETE_FAIL })
        })
}
