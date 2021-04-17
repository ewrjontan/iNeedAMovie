import React, { Component } from 'react';
import { Button } from 'reactstrap';


function GetInterests(){
    return (
        <div className="col-10 mx-auto my-5">
            <h5 className="my-5">Looking for something to watch but have too many options? We are here to help you find the perfect movie.</h5>
            
            <h5>In order to make the best suggestions, we'll need to know what your interests are.</h5>

            <Button outline color="dark" size="lg" block className="col-md-5 mx-auto my-5">Lets Get Started</Button>
        </div>
    )
}



export default GetInterests;
