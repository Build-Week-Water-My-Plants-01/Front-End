import React from 'react';


const PlantCard = ({ frequency, image, nickname, species, toggleEdit}) => {
    return (
        <div className="plant-card">
            <div>
                
                {image ? 
                    <img 
                        src={image} 
                        alt={species} 
                        width="300px" 
                        height="200px" 
                        style={{objectFit: "cover"}}
                    /> : <img 
                        src={require('../img/img-not-found.jpg')} 
                        alt={species}  
                        width="300px" 
                        height="200px" 
                        style={{objectFit: "cover"}}
                    />
                }                
            </div>
            
            <div className="card-content">                
                <div className="card-title">
                    <h1>{nickname}</h1>
                </div>
                <div className="card-subtitle">
                    <h3>Species: {species}</h3>
                    <p>Water: {frequency}</p>
                </div>                
            </div>

            <div className="btn-container">
                <div className="btn btn-edit" onClick={()=>{toggleEdit()}}>
                    Edit
                </div>
            </div>
        </div>
    )
}

export default PlantCard;