import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchPlants = () => dispatch => {
    const myId = window.localStorage.getItem('userID');
    axiosWithAuth()
        .get(`/api/users/${myId}`)
        .then(res => {
            // console.log('resID', res.data.plants);
            dispatch({ type: FETCH_DATA, payload: res.data.plants});
        })
        .catch(err => {
            console.log('err in dashboard', err);
            dispatch({ type: FETCH_FAIL, payload: err});
        })  
}
export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";

export const editPlant = (postParam) => dispatch => {
    dispatch({ type: EDIT_DATA});
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
