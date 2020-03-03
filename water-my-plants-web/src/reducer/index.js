
import {
    FETCH_DATA,
} from '../actions'

const INITIAL_STATE = {
    id: Date.now(),
    nickname:'test Nickname',
    species: 'test Species',
    h2oFrequency: ''
};



export const waterMyPlantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_DATA: 
            return {
                ...state,                
            }
    }
} 