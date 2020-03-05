import React, { useEffect } from 'react';
import Nav from './Nav';
import PlantList from './PlantList';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';

const Dashboard = (props) => {

    useEffect(() => {    
        props.fetchPlants()        
    }, [props.isEditing]);
    
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
    }
}

export default connect(
    mapStateToProps,
    {   
        fetchPlants,
    }
    )(Dashboard);