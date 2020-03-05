import React, { useEffect } from 'react';
import Nav from './Nav';
import PlantList from './PlantList';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { 
    fetchPlants,
    deletePlants, 
    addPlant,
    editPlant 
    } from '../actions';


const Dashboard = (props) => {

    useEffect(() => {    
        props.fetchPlants()        
    }, []);
    
    return (
        <div>
            <Nav />
            <PlantList />
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        isFetching: state.isFetching,
        fetchingErrors: state.fetchingErrors,
        plants: state.plants
    }
}

export default connect(
    mapStateToProps,
    {   
        fetchPlants,
        addPlant,
        editPlant,
        deletePlants 
    }
    )(Dashboard);