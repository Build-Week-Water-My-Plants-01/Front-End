import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Nav = () => {
    const [user, setUser ]= useState(false)
    const history = useHistory();

    const logout = () => {
        window.localStorage.clear();
        window.location.reload();
        history.push('/login');
    }

    const editUser = () => {

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
                    <button className="edit-user"onClick={()=>{editUser()}}>
                        Edit Info
                    </button>
                    <button className="logout" onClick={()=>{logout()}}>
                        Logout
                    </button>
                    
                </div>
            </div>
        </nav>
    )

}

export default Nav