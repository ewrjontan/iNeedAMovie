import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function GetMovieFromIMDB(genre){
    fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2F"+ genre,
          {"method": "GET", "headers": {"x-rapidapi-key": "6f03151c4amsh6857709831845abp1023ddjsn86870f36be32", "x-rapidapi-host": "imdb8.p.rapidapi.com"}})
      .then(response => response.json()).then(result => {
      
      console.log('Success:', result);

      return result[Math.floor(Math.random() * result.length)];
      

    })
      .catch(err => {
      console.error(err);
    });
}



function RecommendedMovie(props){
    let genre = props.location.state.genre;
    console.log(genre);

    //let movieRecommendation = GetMovieFromIMDB(genre);
    //console.log(movieRecommendation);

    return (
        <div className="container my-5 pb-5 pb-md-0 ">
            <h1 className="text-white">We Recommend:</h1>
            <Card className="my-5">
                <div className="row col col-md-10 mx-auto my-1 my-md-5">
                    <CardImg src='' alt="Movie Poster" className="col-8 col-sm-3 mx-auto mt-5 mt-md-1"/>
                    <CardBody className="align-self-center">
                        <CardTitle className="col"><h1></h1></CardTitle>
                        <CardText>
                            <p>{`Genre: `}</p>
                            <p>{`Rating: `}</p>
                        </CardText>
                    </CardBody>
                </div>
                    
                <CardText className="mb-4 px-4 px-md-5">
                    <p></p>
                </CardText>

                <div className="row mx-auto col-12 col-md-4 mb-5">
                    <h6 className="col-6 align-self-center">Not feeling it?</h6>
                    <Link to="/justpick" className="link">
                        <Button color="primary" className="col">Try Again</Button>
                    </Link>
                </div>

            </Card>
            
        </div>
    );
}



export default RecommendedMovie;