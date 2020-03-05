
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
    USER_DATA,
    NEWUSER_DATA,
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL
} from '../actions'

const INITIAL_STATE = {
    editData: false,
    isEditing: false,
    isFetching: false,
    fetchingErrors:'',
    username: '',
    phone_number: '',
    password: '',
    plants:[],
};

export const waterMyPlantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        //FETCH Data Reducer
        case FETCH_DATA: 
            return {
                ...state,                
                isFetching: true,  
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                plants: action.payload, 
                isFetching: false,
            }
        case FETCH_FAIL: 
            return {
                ...state,
                isFetching: false,      
                fetchingErrors: action.payload 
            }

        //ADD Data Reducer
        case ADD_DATA: 
            return {
                ...state,                
                isEditing: true,
                isFetching: true, 
            }
        case ADD_SUCCESS: 
            return {
                ...state,                
                isEditing: false,
                isFetching: false, 
            }
        case ADD_FAIL: 
            return {
                ...state,                
                isEditing: false,
            }

        //ADD Data Reducer
        case EDIT_DATA: 
            return {
                ...state,                
                isEditing: true, 
            }
        case EDIT_SUCCESS: 
            return {
                ...state,                
                isEditing: false, 
            }
        case EDIT_FAIL: 
            return {
                ...state,                
                isEditing: false,
            }

        //DELETE Data Reducer
        case DELETE_DATA: 
        return {
            ...state,                
            isEditing: true, 
            }
         case DELETE_SUCCESS: 
            return {
            ...state,                
            isEditing: false, 
            }
        case DELETE_FAIL: 
            return {
            ...state,                
            isEditing: false,
            }
        //display user data
        case USER_DATA:
            return {
            ...state,
            username: action.payload.username,
            password: action.payload.password
            }
        case NEWUSER_DATA:
            return {
            ...state,
            username: action.payload.username,
            phone_number: action.payload.phone_number,
            password: action.payload.password
            }

        //edit user information
        case EDIT_USER_REQUEST:
            return {
                ...state,                
                editData: true,
                }
        case EDIT_USER_SUCCESS:
            return {
                ...state,                
                isEditing: false,
                }
        case EDIT_USER_FAIL:
            return {
                ...state,                
                isEditing: false,
                }
        default: 
            return state;
            
            
    }
    
} 