import React from 'react';


const PlantCard = () => {
    return (
        <div className="plant-card">
            <div className="card-content">
                <h1>this is plant Card</h1>
                <h3>this is plant Card</h3>
                <h3>this is plant Card</h3>
                <h3>this is plant Card</h3>
            </div>

            <div className="btn-container">
                <div className="btn btn-delete">
                    Delete
                </div>
                <div className="btn btn-edit">
                    Edit
                </div>
            </div>
        </div>
    )
}

export default PlantCard;