import React from 'react';
import { Link } from 'react-router-dom';

const History = (props) => {
 const {name,id,email}= props.user
    const userStyle ={
        
        border: '1px solid blue',
        padding:'20px',
        magin: '5px'
    }
    return (
        <div style={userStyle}>
            <h1>this name is: {name}</h1>
            <h1>Her email is: {email}</h1>
           <Link to={`/frind/${id}`}>Deatails {id}</Link>
        </div>
    );
};

export default History;