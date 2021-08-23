import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Button } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { Fade } from 'react-animation-components';


class GetMovie extends Component{
    constructor(props){
        super(props);
        this.state = {
            imdbMovieTitle: null,
            movieInfo: null
        };

    }

    componentDidMount(){
        this.FetchMovie(this.props.genre);
    }

    TryAgainClick = () => {
        console.log("Try again is clicked");
        return this.setState({movieInfo: null}, this.FetchMovie(this.props.genre))
        
    }


    FetchMovie = (genre) => {
        //const regex = /(?<=\/).+?(?=\/)/g;
        const regex = /[\/]*[^\/]+[\/]([^\/]+)/;

        let imdbUrl;
        console.log("passed property: " + genre)

        if (genre === "random"){
            console.log("Getting random movie");
            imdbUrl = "https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US";

        }else{
            console.log("Getting movie based on favorite genres");
            imdbUrl = "https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=%2Fchart%2Fpopular%2Fgenre%2F"+ genre;
        }

        console.log(imdbUrl);

        fetch(imdbUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
	        }
        })
        .then(response => response.json()).then(result => {
            console.log("my result: ");
            console.log(result);

            console.log("imdb title without regex");
            console.log(result[Math.floor(Math.random() * result.length)]);

            console.log("imdb title with regex");
            console.log(result[Math.floor(Math.random() * result.length)].match(regex)[1]);
            
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
            {"method": "GET",
             "headers": {
                "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
            }
        })
            .then(response => response.json()).then(result => {
                console.log('Success:', result);
                this.setState({movieInfo: result}, this.RenderCard)
        })
            .catch(err => {
                console.error(err);
        });
    }
    

    RenderCard = () => {
        if (this.state.movieInfo != null){

            let movie = this.state.movieInfo;

            let title = movie.title.title;
            //console.log(title);

            let releaseDate = movie.title.year;
            //console.log(releaseDate);

            let genre = movie.genres.join(", ");
            //console.log(genre);

            let rating = movie.ratings.rating;
            //console.log(rating);


            let summary;

            if (movie.hasOwnProperty("plotSummary")){
                summary = movie.plotSummary.text;
            }else if (movie.hasOwnProperty("plotOutline")){
                summary = movie.plotOutline.text;
            }else{
                summary = "No summary available"
            };

            let website = `https://www.imdb.com${movie.title.id}`;
            let image = movie.title.image.url;

            return (
                <React.Fragment>
                    <Fade in>
                        <h1 className="text-white">We Recommend:</h1>
                        <Card className="my-5">
                            <div className="row col col-md-10 mx-auto my-1 my-md-5">
                                <CardImg src={image} alt="Movie Poster" className="col-8 col-sm-3 mx-auto mt-5 mt-md-1"/>
                                <CardBody className="align-self-center col-sm-9">
                                    <CardTitle className=" mb-5"><h1>{title} ({releaseDate})</h1></CardTitle>
                                    <CardText><span>Average Rating: </span>{rating}</CardText>
                                    <CardText><span>Genre: </span>{genre}</CardText>
                                    <a href={website} target="_blank" rel="noreferrer">
                                        <Button outline color="secondary" className="mt-2">Get More Info</Button>
                                    </a>
                                </CardBody>
                            </div>
                                
                            <CardText className="mt-0 px-4 px-md-5">{summary}</CardText>
            
                            <div className="row mx-auto col-12 col-md-4 mb-5">
                                <h6 className="col-6 align-self-center">Not feeling it?</h6>
                                
                                <Button color="primary" className="col" onClick={this.TryAgainClick}>Try Again</Button>
                            
                            </div>
            
                        </Card>  
                    </Fade>
                </React.Fragment>
            );

        }else{
            return(
                <Loading />
            );
        }

    }


    render(){
        return (
            <React.Fragment>
                <this.RenderCard />
            </React.Fragment>
        );

    } 
}

export default GetMovie;
