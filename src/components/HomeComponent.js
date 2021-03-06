import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function Home(){
    return (
        <div className="col-md-5 mx-auto my-5 home-container">
            <div className="home-div py-5 mx-auto">
                <h3 className="">Having trouble finding something to watch?</h3>
                <h3 className="pt-3">We can help you find the perfect movie.</h3>
                
                <Link to="/getinterests" className="link">
                    <Button color="primary" size="lg" block className="col-sm-8 col-lg-5 mx-auto mt-5">Lets Get Started</Button>
                </Link>
                
            </div>
            
            <div className="home-div pb-5">
                <h3 className="pt-5">Need something to watch ASAP? Go ahead, skip the line.</h3>
                
                <Link to="/justpick" className="link">
                    <Button color="light" size="lg" block className="col-sm-8 col-lg-5 mx-auto my-5">Just Pick A Movie</Button>
                </Link>
            </div>
            

        </div>
    )
}



export default Home;
