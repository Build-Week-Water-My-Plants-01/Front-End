import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Nav = () => {

    const history = useHistory();

    const logout = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('userID');
        history.push('/login');
    }


    return (
        <nav>
            <div className="nav-cont">
                <div className="img-div">
                    <img src="../img/Logo.png" alt="water-my-plants-logo"/>
                </div>
                <div>
                    <button onClick={()=>{logout()}}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )

}

export default Nav