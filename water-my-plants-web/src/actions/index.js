import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_DATA = 'FETCH_DATA';

export const fetchPlants = () => dispatch => {
    dispatch({ type: FETCH_DATA});
    
}




