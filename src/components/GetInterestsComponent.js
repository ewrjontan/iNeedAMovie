import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle, Button } from 'reactstrap';


import Home from './HomeComponent';
import GetMovie from './GetMovieComponent';
import { GENRES } from '../shared/genres'
//import { GENRESIMDB } from '../shared/genresIMDB'


import { Switch, Route, Redirect } from 'react-router-dom';



class GetInterests extends Component{
    constructor(props){
        super(props);
        this.state = {
            userSelectedGenres: [],
            genres: GENRES,
            randomUserGenre: null,
            goButtonClicked: false,
            imdbMovieTitles: null
        };

    }

    GetMovieFromIMDB = (genre) => {
        fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2F"+ genre,
              {"method": "GET", "headers": {"x-rapidapi-key": "6f03151c4amsh6857709831845abp1023ddjsn86870f36be32", "x-rapidapi-host": "imdb8.p.rapidapi.com"}})
          .then(response => response.json()).then(result => {
          
          console.log('Success:', result);
    
          //return result[Math.floor(Math.random() * result.length)];
          this.setState({imdbMovieTitles: result[Math.floor(Math.random() * result.length)]});
    
        })
          .catch(err => {
          console.error(err);
        });
    }

    GetMovieInfo = (title) => {
        fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${title}&currentCountry=US`, 
            {"method": "GET", "headers": {"x-rapidapi-key": "6f03151c4amsh6857709831845abp1023ddjsn86870f36be32", "x-rapidapi-host": "imdb8.p.rapidapi.com"}})
            .then(response => response.json()).then(result => {
                console.log('Success:', result);
                //this.setState({imdbMovieTitles: result[Math.floor(Math.random() * result.length)]}); xxx CHANGE ME!!!!!!!!!!! xxxxx
        })
            .catch(err => {
                console.error(err);
        });
    }


    getMovieTitles = () => {
        //removes the buttons and loads movie card
        this.setState({goButtonClicked: true})

        console.log(`Genre: ${this.state.randomUserGenre}`);
        let genre = this.state.randomUserGenre;

        this.GetMovieFromIMDB(genre);
    

    }

    genreButtonClick = (genre) => {
   
        let tempArray = this.state.userSelectedGenres;
        const index = tempArray.indexOf(genre);

        if (index < 0) {
            tempArray.push(genre);
        } else {
            tempArray.splice(index, 1);
        }

        this.setState({userSelectedGenres: tempArray});

        //console.log(this.state.userSelectedGenres);

        this.chooseRandomGenre(tempArray);
    }

    chooseRandomGenre = (userList) => {
        let randomGenre = userList[Math.floor(Math.random() * userList.length)];
    
        console.log(randomGenre);

        this.setState({randomUserGenre: randomGenre});
    }




    render(){
        
        function RenderButtonsOrMovie(props){
            //console.log(props.genresSelected);

            if (props.goButtonClicked){//renders card with movie recommendation
                return(
                    <React.Fragment>
                        <h1 className="text-black">We Recommend:</h1>
                        <Card className="my-5">
                            <div className="row col col-md-10 mx-auto my-1 my-md-5">
                                <CardImg src='' alt="Movie Poster" className="col-8 col-sm-3 mx-auto mt-5 mt-md-1"/>
                                <CardBody className="align-self-center">
                                    <CardTitle className="col"><h1>{props.movie}</h1></CardTitle>
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
                    </React.Fragment>
                )
            }else{//renders buttons for selecting genres
                return(
                    <React.Fragment>
                        <h2 className="text-dark py-5">In order to make the best suggestions, we'll need to know what your interests are.</h2>
                        <h4 className="pb-5">Please select your favorite genres.</h4>
                        <div className="mx-auto col mb-5">
                            <div className="row col mx-auto">
                                {props.genres.map(genre => {
                                    return(
                                        
                                    <Button key={genre.id} outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2" onClick={() => props.genreButtonClick(genre.name)} active={props.userSelectedGenres.includes(genre.name)}>{genre.name}</Button>
                                        
                                    )
                                })}
                            </div>
                        </div>
                    </React.Fragment>
                );
            }
        }

        return (
            <div className="container my-5 pb-5 pb-md-0 bg-light">

                <RenderButtonsOrMovie genres={this.state.genres} genreButtonClick={this.genreButtonClick} userSelectedGenres={this.state.userSelectedGenres} goButtonClicked={this.state.goButtonClicked} movie={this.state.imdbMovieTitles}/>
                
                <Button color="primary" size="lg" className="col-12 col-md-2" onClick={this.getMovieTitles}>Go</Button>
                
                <p>Selected: {JSON.stringify(this.state.userSelectedGenres)}</p>
                <p>Random genre to use: {JSON.stringify(this.state.randomUserGenre)}</p>
            </div>
        );
    }
}



export default GetInterests;

/*backup before adding render if else for buttons or poster
function RenderGenreButtons(props){

            return(
                <div className="mx-auto col mb-5">
                    <div className="row col mx-auto">
                        {props.genres.map(genre => {
                            return(
                                
                            <Button key={genre.id} outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2" onClick={() => props.genreButtonClick(genre.name)} active={props.userSelectedGenres.includes(genre.name)}>{genre.name}</Button>
                                
                            )
                        })}
                    </div>
                </div>
            );
        }*/

/*
<Link to={{pathname: '/recommended', state: {genre: this.state.randomUserGenre}}} className="link">
                    <Button color="primary" size="lg" className="col-12 col-md-2" onClick={this.goButtonClick}>Go</Button>
                </Link>*/