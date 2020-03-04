
import {
    FETCH_DATA,
} from '../actions'

const INITIAL_STATE = {
    isUpdating: false,
    pageUpdating: false,
    plants:[],

};



export const waterMyPlantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_DATA: 
            return {
                ...state,                
                plants: action.payload 
            }
        default: 
            return state;
            
    }
    
} 