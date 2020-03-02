
import {
    FETCH_DATA,
} from '../actions'

const INITIAL_STATE = {};



export const waterMyPlantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_DATA: 
            return {
                ...state,                
            }
    }
} 