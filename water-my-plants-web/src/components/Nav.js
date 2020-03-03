import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Nav = () => {

    const history = useHistory();

    const logout = () => {
        window.localStorage.removeItem('token');
        history.push('/');
    }


    return (
        <nav>
            <div className="nav-cont">
                <div>
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