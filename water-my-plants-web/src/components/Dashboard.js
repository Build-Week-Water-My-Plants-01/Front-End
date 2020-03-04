import React, { useEffect } from 'react';
import Nav from './Nav';
import PlantList from './PlantList';
import { axiosWithAuth } from '../utils/axiosWithAuth';



const Dashboard = () => {
    
    return (
        <div>
            <Nav />
            <PlantList />
        </div>
    )
}

export default Dashboard;