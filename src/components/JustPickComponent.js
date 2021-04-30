import React from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import GetMovie from './GetMovieComponent';





function JustPick(props){

    //let randomMovie = props.movies[Math.floor(Math.random() * props.movies.length)];

    //console.log(randomMovie);

    return (
        <div className="container my-5 pb-5  pb-md-0 ">
            <h1 className="text-white">We Recommend:</h1>
            
            <GetMovie />
            
        </div>
    );
}



export default JustPick;
