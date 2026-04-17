
import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";


function Error(){
    // navigate is used to automatically navigate to a specific url without taking any user input
    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/home")
    },[navigate]);

    return(
        <h4>This is an error page</h4>
    );
}

export default Error;