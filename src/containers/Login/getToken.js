import React from 'react';
import { useSelector } from 'react-redux';

const GetToken = () => {
    
    const tokenSelecter = useSelector((state)=> state.reducerLogin.status);
    console.log("tokenSelecter = ", tokenSelecter);
    return (
      
  {
       headers: {
        Authorization: `Bearer ${tokenSelecter}` //the token is a variable which holds the token
       }
      
}

      
    );
};

export default GetToken;