import React, { useEffect } from 'react';
import Nav from './Nav';
import PlantList from './PlantList';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions';

const Dashboard = ({isEditing, fetchPlants}) => {

    useEffect(() => {    
        fetchPlants()        
    }, [isEditing]);
    
    return (
        <div className='dashboard-bg'>
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