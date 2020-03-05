import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


const Nav = () => {
    const [userModal, setUserModal ]= useState(false);
    const [ userData, setUserData ] = useState({})
    const history = useHistory();

    const logout = () => {
        window.localStorage.clear();
        history.push('/login');
        window.location.reload();  
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
            <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    onChange=''
                    value=''
                    required
                    />
                <label htmlFor="phonenumber">Phone Number</label>
                <input 
                    type="text"
                    name="phonenumber"
                    onChange=''
                    value=''
                    required
                    />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    onChange=''
                    value=''
                    required
                />
                               
                <button className=" btn btn-edit" >Save Edit</button>
                <button className=" btn btn-edit" onClick={()=>{toggleUser()}}>Cancel</button>
                
                <div className="modal-close" onClick={()=>toggleUser()}>X</div>
            </div>
        </div> : null}
        </nav>
    )

}

export default Nav