import React from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle } from 'reactstrap';




function JustPick(props){

    let randomMovie = props.movies[Math.floor(Math.random() * props.movies.length)];

    console.log(randomMovie);

    return (
        <div className="container mt-5 random-movie-container">
            <h1 className="text-white">We Recommend:</h1>
            <Card className="my-5">
                <div className="row col col-md-10 mx-auto my-5">
                    <CardImg src={randomMovie.image} alt="Movie Poster" className="col col-sm-3"/>
                    <CardBody className="align-self-center">
                        <CardTitle className="col"><h1>{randomMovie.title}</h1></CardTitle>
                        <CardText>
                            <h3>{`Genre: ${randomMovie.genre} `}</h3>
                            <h3>{`Rating: ${randomMovie.rating} `}</h3>
                        </CardText>
                    </CardBody>
                </div>
                    <CardText className="mb-5 px-4 px-md-5">
                        <h5>{randomMovie.summary}</h5>
                    </CardText>
            </Card>
        </div>
    );
}



export default JustPick;
