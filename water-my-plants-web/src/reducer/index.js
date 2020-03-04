
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
    isAdding: false,
    fetchingErrors:'',
    plants:[],
};



export const waterMyPlantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_DATA: 
            return {
                ...state,                
                plants: action.payload 
            }
        case FETCH_FAIL: 
            return {
                ...state,                
                fetchingErrors: action.payload 
            }
        default: 
            return state;
            
    }
    
} 