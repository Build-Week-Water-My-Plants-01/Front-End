import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import { editUser } from '../actions/index';


const Nav = (props) => {
    const [userModal, setUserModal ]= useState(false);
    const [ userData, setUserData ] = useState({
        username: props.username,
        phone_number: props.phone_number,
        password: props.password
    })
    const history = useHistory();

    const logout = () => {
        window.localStorage.clear();
        history.push('/login');
        window.location.reload();  
    }

    const toggleUser = () => {
        setUserModal(!userModal);
    }

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.editUser(userData);
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
                    <button className="edit-user btn-edit"onClick={()=>{toggleUser()}}>
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
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={userData.username}
                    required
                    />
                <label htmlFor="phonenumber">Number</label>
                <input 
                    type="text"
                    name="phone_number"
                    onChange={handleChange}
                    value={userData.phone_number}
                    required
                    />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={userData.password}
                    required
                />
                <div className="btn-align">              
                    <button type="submit" className=" btn btn-edit" >Save Edit</button>
                    <button className=" btn btn-delete" onClick={()=>{toggleUser()}}>Cancel</button>
                </div> 
                </form>                
                
                <div className="modal-close" onClick={()=>toggleUser()}>X</div>
            </div>
        </div> : null}
        </nav>
    )

}

const mapStateToProps = state => {
    return {
        username: state.username,
        phone_number: state.phone_number,
        password: state.password,
    }
}

export default connect(
    mapStateToProps,
    {editUser}
    )(Nav);