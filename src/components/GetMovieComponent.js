import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class GetMovie extends Component{
    constructor(props){
        super(props);
        this.state = {
            genre: this.props.location.state
        };

    }

    render(){
        return (
            <div className="bg-light">
                <h1>We Recommend {this.state.genre}</h1>
            </div>
        );
    }

}



export default GetMovie;

//props.location.state.genre;

/*<div className="container my-5 pb-5  pb-md-0 ">
            <h1 className="text-white">We Recommend:</h1>
            <Card className="my-5">
                <div className="row col col-md-10 mx-auto my-1 my-md-5">
                    <CardImg src={randomMovie.image} alt="Movie Poster" className="col-8 col-sm-3 mx-auto mt-5 mt-md-1"/>
                    <CardBody className="align-self-center">
                        <CardTitle className="col"><h1>{randomMovie.title}</h1></CardTitle>
                        <CardText>
                            <p>{`Genre: ${randomMovie.genre} `}</p>
                            <p>{`Rating: ${randomMovie.rating} `}</p>
                        </CardText>
                    </CardBody>
                </div>
                    
                <CardText className="mb-4 px-4 px-md-5">
                    <p>{randomMovie.summary}</p>
                </CardText>

                <div className="row mx-auto col-12 col-md-4 mb-5">
                    <h6 className="col-6 align-self-center">Not feeling it?</h6>
                    <Link to="/justpick" className="link">
                        <Button color="primary" className="col">Try Again</Button>
                    </Link>
                </div>

            </Card>
            
        </div>*/