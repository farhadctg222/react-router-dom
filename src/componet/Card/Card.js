import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {

   
    return (
        
        <div style={{backgroundColor:'green',textAlign:'center',marginLeft: '10px',color: 'blue'}}>
            
           <Link to="/math">math</Link>
            <Link to="/english">english</Link>
           <Link to="/history">history</Link>
           <Link to="/bangla">bangla</Link>
 
  </div>
   
        
    );
};

export default Card;