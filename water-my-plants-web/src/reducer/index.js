
import {
    FETCH_DATA,
    FETCH_SUCCESS,
    FETCH_FAIL,
    ADD_DATA,
    ADD_SUCCESS,
    ADD_FAIL,
    DELETE_DATA,
    DELETE_SUCCESS,
    DELETE_FAIL,
    EDIT_DATA,
    EDIT_FAIL,
    EDIT_SUCCESS,
} from '../actions'

const INITIAL_STATE = {
    isEditing: false,
    isDeleting: false,
    isFeching: false,
    isAdding: false,
    fetchingErrors:'',
    plants:[],
};



export const waterMyPlantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //Fetching Data Reducer
        case FETCH_DATA: 
            return {
                ...state,                
                isFetching: true 
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                isFetching: false,                
                plants: action.payload 
            }
        case FETCH_FAIL: 
            return {
                ...state,
                isFetching: false,                
                fetchingErrors: action.payload 
            }
        //Adding Data Reducer
        case ADD_DATA: 
            return {
                ...state,                
                isAdding: true, 
            }
        case ADD_SUCCESS: 
            return {
                ...state,                
                isAdding: false, 
            }
        case ADD_FAIL: 
            return {
                ...state,                
                isAdding: false,
            }
            //Adding Data Reducer
        case DELETE_DATA: 
        return {
            ...state,                
            isDeleting: true, 
            }
         case DELETE_SUCCESS: 
            return {
            ...state,                
            isDeleting: false, 
            }
        case DELETE_FAIL: 
            return {
            ...state,                
            isDeleting: false,
            }
        default: 
            return state;
            
    }
    
} 