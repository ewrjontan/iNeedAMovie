import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle, Button } from 'reactstrap';


import Home from './HomeComponent';
//import GetMovie from './GetMovieComponent';
import { GENRES } from '../shared/genres'
//import { GENRESIMDB } from '../shared/genresIMDB'


import { Switch, Route, Redirect } from 'react-router-dom';



class GetInterests extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerBg: "bg-light",
            userSelectedGenres: [],
            genres: GENRES,
            randomUserGenre: null,
            goButtonClicked: false,
            imdbMovieTitle: null,
            movieInfo: null
        };

    }

    GetMovieFromIMDB = (genre) => {
        const regex = /(?<=\/).+?(?=\/)/g;

        fetch("https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2F"+ genre,
              {"method": "GET", "headers": {"x-rapidapi-key": "6f03151c4amsh6857709831845abp1023ddjsn86870f36be32", "x-rapidapi-host": "imdb8.p.rapidapi.com"}})
          .then(response => response.json()).then(result => {
          
          console.log('Success:', result);
    
          //return result[Math.floor(Math.random() * result.length)];
          //result is a list of titles. A random title is selected in the format (/title/unique id/). The unique id is then extracted. 
          return this.setState({imdbMovieTitle: result[Math.floor(Math.random() * result.length)].match(regex)[1]}, this.GetMovieInfo)
    
        })
          .catch(err => {
          console.error(err);
        });
    }

    GetMovieInfo = () => {

        let title= this.state.imdbMovieTitle;
        
        console.log("title: " + title);

        fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?tconst=${title}&currentCountry=US`, 
            {"method": "GET", "headers": {"x-rapidapi-key": "6f03151c4amsh6857709831845abp1023ddjsn86870f36be32", "x-rapidapi-host": "imdb8.p.rapidapi.com"}})
            .then(response => response.json()).then(result => {
                console.log('Success:', result);
                //this.setState({imdbMovieTitle: result[Math.floor(Math.random() * result.length)]}); xxx CHANGE ME!!!!!!!!!!! xxxxx
                this.setState({movieInfo: result})
        })
            .catch(err => {
                console.error(err);
        });
    }


    getMovieTitles = () => {
        //removes the buttons and loads movie card
        this.setState({goButtonClicked: true});
        this.setState({containerBg: ""});

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

            if (props.goButtonClicked && props.movie != null){//renders card with movie recommendation

                //sets state for movieInfo
                //props.GetMovieInfo(props.movie);

                if (props.movieInfo != null){
                    let movie = props.movieInfo;

                    let title = movie.title.title;
                    let releaseDate = movie.title.year;
                    let genre = movie.genres.join(", ");
                    let rating = movie.ratings.rating;

                    let summary;

                    if (movie.hasOwnProperty("plotSummary")){
                        summary = movie.plotSummary.text;
                    }else if (movie.hasOwnProperty("plotOutline")){
                        summary = movie.plotOutline.text;
                    }else{
                        summary = "No summary available"
                    };

                    let website = `https://www.imdb.com ${movie.title.id}`;
                    let image = movie.title.image.url;
                
                    return(
                        <React.Fragment>
                            <h1 className="text-white">We Recommend:</h1>
                            <Card className="my-5">
                                <div className="row col col-md-10 mx-auto my-1 my-md-5">
                                    <CardImg src={image} alt="Movie Poster" className="col-8 col-sm-3 mx-auto mt-5 mt-md-1"/>
                                    <CardBody className="align-self-center">
                                        <CardTitle className="col"><h1>{title}</h1></CardTitle>
                                        <CardText>
                                            <p>{`Release Date: ${releaseDate} `}</p>

                                            <p>{`Genre: ${genre} `}</p>
                                            <p>{`Rating: ${rating}`}</p>
                                        </CardText>
                                    </CardBody>
                                </div>
                                    
                                <CardText className="mb-4 px-4 px-md-5">
                                    <p>{`Summary: ${summary}`}</p>
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
                }else{
                    return(
                        <div>
                            {props.movie}
                        </div>
                    )
                }
                
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

                        <Button color="primary" size="lg" className="col-12 col-md-2 mb-5" onClick={props.getMovieTitles}>Go</Button>
        
                    </React.Fragment>
                );
            }
        }

        return (
            <div className={`container my-5 pb-5 pb-md-0 ${this.state.containerBg}`}>

                <RenderButtonsOrMovie genres={this.state.genres} genreButtonClick={this.genreButtonClick} userSelectedGenres={this.state.userSelectedGenres} goButtonClicked={this.state.goButtonClicked} movie={this.state.imdbMovieTitle} GetMovieInfo={this.GetMovieInfo} movieInfo={this.state.movieInfo} getMovieTitles={this.getMovieTitles}
                />
                
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