import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { 
        fetchPlants,
        deletePlants, 
        addPlant,
        editPlant 
        } from '../actions'

const PlantList = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [newPlant, setAddPlant] = useState({
        nickname:'',
        species_name:'',
        h2o_frequency:'',
        image: ''
    })

    const [editedPlant, setEditedPlant] = useState({
        nickname:'',
        species_name:'',
        h2o_frequency:'',
        image: ''
    })

    const toggleEdit = (plant) => {
        setEditing(!isEditing);
        setEditedPlant(plant);
        console.log('this is target', plant);        
    }

    const submitEdit = e => {
        e.preventDefault();
        props.editPlant(editedPlant);
        setEditing(false);
    }

    const submitDelete = () => {

    }

    const toggleAdd = e => {
        setIsAdding(!isAdding);
    }
    const addNewPlant = () => {
        props.addPlant(newPlant);
    }
    const handleAddPlant = e => {
        setAddPlant({
            ...newPlant,
            [e.target.name]: e.target.value,
        })
    }
    const handleImage = e => {
        setAddPlant({
            ...newPlant,
            image: e.target.files[0]
        })
    }

    useEffect(() => {
        props.fetchPlants();
    }, []);

    return (
        <> 
        <div className="plant-container">
            {props.fetchingErrors === '' ? props.plants.map(item => (
                <div key={item.id} onClick={()=>{toggleEdit(item)}}>
                    <PlantCard
                        key={item.id}
                        frequency={item.frequency}
                        image={item.image}
                        nickname={item.nickname}
                        species={item.species_name}
                        toggleEdit={toggleEdit}
                    />
                </div>
            )) : <h1> There was an error getting your plants</h1>}
            
        </div>
        {isEditing ? 
        <div className="modal-bg">
            <div className="modal">
            <label htmlFor="nickname">Nickname</label>
                <input 
                    type="text"
                    name="nickname"
                    onChange={handleAddPlant}
                    value={editPlant.nickname}
                    />
                <label htmlFor="species_name">species</label>
                <input 
                    type="text"
                    name="species_name"
                    onChange={handleAddPlant}
                    value={editPlant.species_name}
                    />
                <label htmlFor="h2o_frequency">Water Frequency</label>
                <input 
                    type="text"
                    name="h2o_frequency"
                    onChange={handleAddPlant}
                    value={editPlant.h2o_frequency}
                />
                <label htmlFor="plant-image">Plant Image</label>
                <input 
                    type="file"
                    name="image"
                    onChange={ handleImage }
                />                
                <button className=" btn btn-edit" onClick={()=>{submitEdit()}}>Save Edit</button>
                <button className="btn btn-delete" onClick={()=>{submitDelete()}}>Delete</button>
                <div className="modal-close" onClick={()=>toggleEdit()}>X</div>
            </div>
        </div> : null}
        
            <div className="add-btn" onClick={()=>{toggleAdd()}}>
                +
            </div>
        
        {isAdding ? 
        <div className="modal-bg">
            <div className="modal">
                <h2>Add your Plant</h2>
                <label htmlFor="nickname">Nickname</label>
                <input 
                    type="text"
                    name="nickname"
                    onChange={handleAddPlant}
                    />
                <label htmlFor="species">species</label>
                <input 
                    type="text"
                    name="species_name"
                    onChange={handleAddPlant}
                    />
                <label htmlFor="h20_frequency">Water Frequency</label>
                <input 
                    type="text"/>
                
                <label htmlFor="plant-image">Plant Image</label>
                <input 
                    type="file"
                    name="image"
                    onChange={ handleImage }
                />                
                <button className="btn-edit" onClick={()=>{addNewPlant()}}>Add New Plant</button>
                <div className="modal-close" onClick={()=>{toggleAdd()}}>X</div>
            </div>
        </div> : null}
        </>
    )
}
const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        isAdding: state.isAdding,
        isDeleting: state.isDeleting,
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
    )(PlantList);