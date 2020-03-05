import React, { useState, useEffect } from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { 
        fetchPlants,
        deletePlants, 
        addPlant,
        editPlant 
        } from '../actions'
import { useHistory } from 'react-router-dom';

const PlantList = (props) => {
    const history = useHistory();
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setEditing] = useState(false);
    const [fetch, setFetch] = useState(false);
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

    useEffect(() => {    
        props.fetchPlants()
        
    }, []);

    const toggleEdit = (plant) => {
        setEditing(!isEditing);
        setEditedPlant(plant);
        // console.log('this is target', plant);        
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
            console.log('editTest', editedPlant);
            props.editPlant(editedPlant, formData);
        }, 500);         
        setEditing(false);
    }

    

    const submitDelete = () => {        
        setTimeout(() => {
        console.log('delete test', editedPlant);
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
            console.log('add test', formData);
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

    //fetches plant data to render on screen
    // useEffect(() => {
    //     props.fetchPlants();
    //     setIsAdding(false)
    // }, [isAdding]);

    return (
        <> 
        <div className="plant-container">
            {props.plants.map(item => (
                <div key={item.id} onClick={()=>{toggleEdit(item)}}>
                    <PlantCard
                        key={item.id}
                        frequency={item.h2o_frequency}
                        image={item.image}
                        nickname={item.nickname}
                        species={item.species_name}
                        toggleEdit={toggleEdit}
                    />
                </div>
            )) }
            
        </div>
        {isEditing ? 
        <div className="modal-bg">
            <div className="modal">
            <label htmlFor="nickname">Nickname</label>
                <input 
                    type="text"
                    name="nickname"
                    onChange={handleEditedPlant}
                    value={editedPlant.nickname}
                    />
                <label htmlFor="species_name">species</label>
                <input 
                    type="text"
                    name="species_name"
                    onChange={handleEditedPlant}
                    value={editedPlant.species_name}
                    />
                <label htmlFor="frequency">Water Frequency</label>
                <input 
                    type="text"
                    name="frequency"
                    onChange={handleEditedPlant}
                    value={editedPlant.frequency}
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
                <input 
                    type="text"
                    name="nickname"
                    onChange={handleAddPlant}
                    value={newPlant.nickname}
                    required
                    />
                <label htmlFor="species_name">species</label>
                <input 
                    type="text"
                    name="species_name"
                    onChange={handleAddPlant}
                    value={newPlant.species_name}
                    />
                <label htmlFor="h2o_frequency">Water Frequency</label>
                <input 
                    type="text"
                    name="h2o_frequency"
                    onChange={handleAddPlant}
                    value={newPlant.h2o_frequency}
                />
                <label htmlFor="plant-image">Plant Image</label>
                <input 
                    type="file"
                    name="image"
                    onChange={ handleNewImage }
                />                 
                <button type="submit" className="btn-edit" onClick={()=>{addNewPlant()}}>Add New Plant</button>
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