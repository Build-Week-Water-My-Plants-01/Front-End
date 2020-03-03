import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchPlants = () => dispatch => {
    dispatch({ type: FETCH_DATA});
    //axios call goes here
    
}

export const ADD_DATA = "ADD_DATA";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";

export const addPlant = (postParam) => dispatch => {
    dispatch({ type: ADD_DATA});
    //axios call goes here
}

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";

export const deletePlant = (id) => dispatch => {
    dispatch({ type: DELETE_DATA});

}