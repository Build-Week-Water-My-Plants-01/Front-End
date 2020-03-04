import React, { useEffect } from 'react';
import PlantCard from './PlantCard';
import { connect } from 'react-redux';
import { fetchPlants } from '../actions'

const PlantList = (props) => {

    useEffect(() => {
        props.fetchPlants();
    }, []);

    console.log('this is props',props.plants);
    return (
        <div className="plant-container">
            {props.plants.map(item => (
                <PlantCard
                    key={item.id}
                    frequency={item.frequency}
                    image={item.image}
                    nickname={item.nickname}
                    species={item.species_name}
                 />
            ))}
        </div>
    )
}
const mapStateToProps = state => {
    console.log('state', state);
    return {
        plants: state.plants
    }
}

export default connect(
    mapStateToProps,
    { fetchPlants }
    )(PlantList);