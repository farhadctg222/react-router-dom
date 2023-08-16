import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Frind = () => {
    const {frindi} = useParams()
    const [frd,setFrd] = useState({})
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${frindi}`
    fetch(url)
    .then(res=>res.json())
    .then(data=> setFrd(data))
    },[])
    return (
        <div style={{backgroundColor:'green',textAlign:'center',marginLeft: '10px',color: 'blue'}}>
            <h1>this not details{frindi}</h1>
            <h1>{frd.name}</h1>
            <h1>{frd.email}</h1>
            <h1>{frd.phone}</h1>
            <h1>{frd.website}</h1>
        </div>
    );
};

export default Frind;