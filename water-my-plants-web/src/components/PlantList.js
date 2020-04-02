import React, { useState } from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { 
        fetchPlants,
        deletePlants, 
        addPlant,
        editPlant,
        setImgToState 
        } from '../actions';

const PlantList = (props) => {

    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [newPlant, setNewPlant] = useState({
        nickname:'',
        species_name:'',
        h2o_frequency:'',
        image: '',        
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
    }
    const handleEditedPlant = e => {
            setEditedPlant({
                ...editedPlant,
                [e.target.name]: e.target.value,
            })
    }

    const submitEdit = () => {     
        let formData = new FormData();
        formData.append('nickname', editedPlant.nickname);
        formData.append('species_name', editedPlant.species_name);
        formData.append('h2o_frequency', editedPlant.h2o_frequency);
        formData.append('image', editedPlant.image);
        
        setTimeout(() => {
            props.editPlant(editedPlant, formData);
        }, 500);         
        setEditing(false);
    }
 
    const submitDelete = () => {        
        setTimeout(() => {
           props.deletePlants(editedPlant); 
        }, 500);
        setEditing(false);        
    }

    const handleImage = e => {
        setEditedPlant({
            ...editedPlant,
            image: e.target.files[0]
        })
    }
    const toggleAdd = () => {
        setIsAdding(!isAdding);
    }

    const handleAddPlant = (e) => {
        setNewPlant({
            ...newPlant,
            [e.target.name]: e.target.value
        })
    } 

    const addNewPlant = () => {  
        let formData = new FormData();
        formData.append('nickname', newPlant.nickname);
        formData.append('species_name', newPlant.species_name);
        formData.append('h2o_frequency', newPlant.h2o_frequency); 
        formData.append('image', newPlant.image);
        
        setTimeout(() => {
            props.addPlant(formData);
            setNewPlant({
                nickname:'',
                species_name:'',
                h2o_frequency:'',
                image: '', 
            })
                
            }, 500);
        setIsAdding(false);
    }
    
    const handleNewImage = e => {
        setNewPlant({
            ...newPlant,
            image: e.target.files[0]
        })
    }

    return (
        <> 
        <div className="plant-container">
            {props.plants.map(item => {
                return(
                <div key={item.id} onClick={()=>{toggleEdit(item)}}>
                
                    <PlantCard
                        key={item.id}
                        frequency={item.h2o_frequency}
                        image={item.image}
                        nickname={item.nickname}
                        species={item.species_name}
                        toggleEdit={toggleEdit}
                    />
                </div>)
            }) }
            
        </div>
        {isEditing ? 
        <div className="modal-bg">
            <div className="modal">
            <img src={require('../img/Logo.png')} alt="logo" height="100" width="100"/>
            <div className="order-switch">
                <label htmlFor="nickname">Nickname</label>
                    <input 
                        type="text"
                        name="nickname"
                        onChange={handleEditedPlant}
                        value={editedPlant.nickname}
                        />
            </div>
            <div className="order-switch">
                <label htmlFor="species_name">Species</label>
                <input 
                    type="text"
                    name="species_name"
                    onChange={handleEditedPlant}
                    value={editedPlant.species_name}
                    />
            </div>
            <div className="order-switch">
                <label htmlFor="h2o_frequency">Water Frequency</label>
                <input 
                    type="text"
                    name="h2o_frequency"
                    onChange={handleEditedPlant}
                    value={editedPlant.h2o_frequency}
                />
            </div>
            <div className="order-switch">
                <label htmlFor="plant-image">Edit Plant Image</label>
                <input 
                    type="file"
                    name="image"
                    onChange={ handleImage }
                    
                />
            </div>
                <div className="btn-align">               
                    <button className=" btn btn-edit" onClick={()=>{submitEdit()}}>Save Edit</button>
                    <button className="btn btn-delete" onClick={()=>{submitDelete()}}>Delete</button>
                </div> 
                <div className="modal-close" onClick={()=>toggleEdit()}>X</div>
            </div>
        </div> : null}
        
            <div className="add-btn" onClick={()=>{toggleAdd()}}>
                +
            </div>
        
        {isAdding ? 
        <div className="modal-bg">
            <div className="modal">
            <img src={require('../img/Logo.png')} alt="logo" height="100" width="100"/>
            <div className="order-switch">
                <label htmlFor="nickname">New Plant</label>
                <input 
                    type="text"
                    name="nickname"
                    onChange={handleAddPlant}
                    value={newPlant.nickname}
                    required
                    />
            </div>
            <div className="order-switch">
                <label htmlFor="species_name">Species</label>
                <input 
                    type="text"
                    name="species_name"
                    onChange={handleAddPlant}
                    value={newPlant.species_name}
                    />
            </div>
            <div className="order-switch">
                <label htmlFor="h2o_frequency">Water Frequency</label>
                <input 
                    type="text"
                    name="h2o_frequency"
                    onChange={handleAddPlant}
                    value={newPlant.h2o_frequency}
                />
            </div>
            <div className="order-switch">
                <label htmlFor="plant-image">Plant Image</label>
                <input 
                    type="file"
                    name="image"
                    onChange={ handleNewImage }
                />
            </div>
                <div className="btn-align">                
                    <button type="submit" className=" btn btn-edit" onClick={()=>{addNewPlant()}}>Add New Plant</button>
                </div> 
                <div className="modal-close" onClick={()=>{toggleAdd()}}>X</div>
            </div>
        </div> : null}
        </>
    )
}
const mapStateToProps = state => {
    return {
        isEditing: state.isEditing,
        fetchingErrors: state.fetchingErrors,
        plants: state.plants,
        plantImg: state.plantImg,
    }
}

export default connect(
    mapStateToProps,
    {   
        fetchPlants,
        addPlant,
        editPlant,
        deletePlants,
        setImgToState  
    }
    )(PlantList);