import { axiosWithAuth } from '../utils/axiosWithAuth';
import { axiosFormData } from '../utils/axiosFormData';


export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const fetchPlants = () => dispatch => {
    const userID = window.localStorage.getItem('userID'); 
    dispatch({ type: FETCH_DATA })   
    axiosWithAuth()
        .get(`users/${userID}`)
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data.plants});            
        })
        .catch(err => {
            // console.log('err in fetching plants', err);
            dispatch({ type: FETCH_FAIL, payload: err});
        })  
}

export const EDIT_DATA = "EDIT_DATA";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";
export const editPlant = (editedPlant, formData) => dispatch => {
    dispatch({ type: EDIT_DATA});
    const userID = window.localStorage.getItem('userID'); 
    //axios call goes here
    axiosFormData()
            .put(`users/${userID}/plants/${editedPlant.id}`, formData)
            .then(res => {
                dispatch({ type: EDIT_SUCCESS });
                fetchPlants();                         
            })
            .catch(err => {
                dispatch({ type: EDIT_FAIL });
                // console.log('error updating', err)
            })
}

export const ADD_DATA = "ADD_DATA";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";
export const addPlant = (formData) => dispatch => {
    dispatch({ type: ADD_DATA});
    const userID = window.localStorage.getItem('userID'); 
    axiosFormData()
        .post(`users/${userID}/plants/`, formData)
        .then(res => {
            dispatch({ type: ADD_SUCCESS, payload: res.data })
            fetchPlants();
        })
        .catch(err => {
            dispatch({ type: ADD_FAIL, payload: err })
        })
}

export const DELETE_DATA = "DELETE_DATA";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAIL = "DELETE_FAIL";
export const deletePlants = (editPlant) => dispatch => {
    dispatch({ type: DELETE_DATA});
    const userID = window.localStorage.getItem('userID'); 
    axiosWithAuth()
        .delete(`users/${userID}/plants/${editPlant.id}`)
        .then(res => {
            // console.log('success deleting', res);
            dispatch({ type: DELETE_SUCCESS });
        })
        .catch(err => {
            // console.log('error deleting', err);
            dispatch({ type: DELETE_FAIL })
        })
}

export const USER_DATA = "USER_DATA"
export const userData = (newUser) => dispatch => {
    // console.log('this is userData', newUser);
    dispatch({ type: USER_DATA, payload: newUser })
}

export const NEWUSER_DATA = "NEWUSER_DATA"
export const newUserData = (newUser) => dispatch => {
    // console.log('this is newUserData', newUser);
    dispatch({ type: NEWUSER_DATA, payload: newUser })
}

export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAIL = "EDIT_USER_FAIL";
export const editUser = (editedUser) => dispatch => {
    dispatch({ type: EDIT_USER_REQUEST});
    const userID = window.localStorage.getItem('userID'); 
    axiosWithAuth()
        .put(`users/${userID}`, editedUser)
        .then(res => {
            // console.log('success editing credentials', res);
            dispatch({ type: EDIT_USER_SUCCESS });
        })
        .catch(err => {
            // console.log('error editing credentials', err);
            dispatch({ type: EDIT_USER_FAIL, payload: err })
        })
}