import React, { useEffect, useState } from 'react';
import History from './History/History';


const Bangla = () => {
    const [User,setUser]=  useState([])
    useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res=>res.json())
     .then(data=> setUser(data))
    },[])
    return (
        <div>
           
            <h1>total lenth {User.length}</h1>
            {
                User.map(user=> <History user={user}></History>)
            }
        </div>
    );
};

export default Bangla;