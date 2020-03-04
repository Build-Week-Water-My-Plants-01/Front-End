import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { 
        fetchPlants,
        deletePlants, 
        addPlant 
        } from '../actions'

const PlantList = (props) => {
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [newPlant, setAddPlant] = useState({
        nickname:'',
        species_name:''
    })

    const toggleEdit = () => {
        setEditing(!isEditing);        
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

    useEffect(() => {
        props.fetchPlants();
    }, []);

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
                    toggleEdit={toggleEdit}
                 />
            )) : <h1> There was an error getting your plants</h1>}
            
        </div>
        {isEditing ? 
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
                {/* <label htmlFor="waterfrequency">Water Frequency</label>
                <input 
                    type="text"/> */}
                <button className="btn-edit" onClick={()=>{addNewPlant()}}>Add Plant</button>
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
        deletePlants 
    }
    )(PlantList);