import React from 'react';



const Add = () => {
    const container ={
       
            backgroundColor: '#fff',
            borderRadius: '8px',
           
            padding: '30px',
            width: '400px',
            textAlign: 'center'
          
    }
   
    return (
        <div style={container} className="container">
        <h1>Registration Form</h1>
        <form>
          <input type="text" placeholder="Full Name" required></input>
          <input type="email" placeholder="Email Address" required></input>
          <input type="password" placeholder="Password" required></input>
          <button type="submit">Register</button>
        </form>
      </div>
    );
};

export default Add;