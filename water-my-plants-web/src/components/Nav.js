import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Nav = () => {
    const [userModal, setUserModal ]= useState(false)
    const history = useHistory();

    const logout = () => {
        window.localStorage.clear();
        window.location.reload();
        history.push('/login');
    }

    const toggleUser = () => {
        setUserModal(!userModal);
    }

    return (
        <nav>
            <div className="nav-cont">
                <div className="img-div">
                    <img 
                        src={require('../img/Logo.png')} alt="water-my-plants-logo"/>
                        <h1>Water My Plants 01</h1>
                </div>
                <div className="nav-links">
                    <button className="edit-user"onClick={()=>{toggleUser()}}>
                        Edit Info
                    </button>

                    <button className="logout" onClick={()=>{logout()}}>
                        Logout
                    </button>
                </div>
            </div>
            {userModal ? 
        <div className="modal-bg">
            <div className="modal">
            <label htmlFor="nickname">Nickname</label>
                <input 
                    type="text"
                    name="nickname"
                    onChange=''
                    value=''
                    />
                <label htmlFor="species_name">species</label>
                <input 
                    type="text"
                    name="species_name"
                    onChange=''
                    value=''
                    />
                <label htmlFor="h2o_frequency">Water Frequency</label>
                <input 
                    type="text"
                    name="h2o_frequency"
                    onChange=''
                    value=''
                />
                               
                <button className=" btn btn-edit" onClick={()=>{toggleUser()}}>Save Edit</button>
                
                <div className="modal-close" onClick={()=>toggleUser()}>X</div>
            </div>
        </div> : null}
        </nav>
    )

}

export default Nav