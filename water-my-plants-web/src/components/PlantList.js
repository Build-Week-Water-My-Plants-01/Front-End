import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions'

const PlantList = (props) => {

    const toggleEdit = e => {        
    }
    const toggleAdd = e => {
    }

    useEffect(() => {
        props.fetchPlants();
    }, []);

    console.log('this is props',props.plants);
    return (
        <> 
        <div className="plant-container">
            {props.fetchingErrors === '' ? props.plants.map(item => (
                <PlantCard
                    key={item.id}
                    frequency={item.frequency}
                    image={item.image}
                    nickname={item.nickname}
                    species={item.species_name}
                 />
            )) : <h1> There was an error getting your plants</h1>}
            
        </div>
        {props.isEditing ? 
        <div className="modal-bg">
            <div className="modal">
                <h2>Edit Your Plant</h2>
                <label htmlFor="nickname">Nickname</label>
                <input 
                    type="text"/>
                <label htmlFor="species">species</label>
                <input 
                    type="text"/>
                <label htmlFor="waterfrequency">Water Frequency</label>
                <input 
                    type="text"/>
                <button className="btn-edit">EditPlant</button>
                <div className="modal-close" onClick={()=>toggleEdit()}>X</div>
            </div>
        </div> : null}
        
            <div className="add-btn">
                +
            </div>
        
        {props.isAdding ? 
        <div className="modal-bg">
            <div className="modal">
                <h2>Add your Plant</h2>
                <label htmlFor="nickname">Nickname</label>
                <input 
                    type="text"/>
                <label htmlFor="species">species</label>
                <input 
                    type="text"/>
                <label htmlFor="waterfrequency">Water Frequency</label>
                <input 
                    type="text"/>
                <button className="btn-edit">Add Plant</button>
                <div className="modal-close" onClick={()=>toggleAdd()}>X</div>
            </div>
        </div> : null}
        </>
    )
}
const mapStateToProps = state => {
    console.log('state', state);
    return {
        isEditing: state.isEditing,
        isAdding: state.isAdding,
        fetchingErrors: state.fetchingErrors,
        plants: state.plants
    }
}

export default connect(
    mapStateToProps,
    { fetchPlants }
    )(PlantList);