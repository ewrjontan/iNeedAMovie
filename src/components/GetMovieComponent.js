import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardImgOverlay, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class GetMovie extends Component{
    constructor(props){
        super(props);
        this.state = {
            imdbMovieTitle: null,
            movieInfo: null
        };
    }

    componentDidMount(){
        this.FetchRandomMovie();

    }


    FetchRandomMovie = () => {
        const regex = /(?<=\/).+?(?=\/)/g;

        fetch("https://imdb8.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": process.env.REACT_APP_IMDB_API_KEY,
                "x-rapidapi-host": "imdb8.p.rapidapi.com"
	            }
        })
        .then(response => response.json()).then(result => {
            console.log(result);
            
            return this.setState({imdbMovieTitle: result[Math.floor(Math.random() * result.length)].match(regex)[1]})

            //return this.setState({imdbMovieTitle: result[Math.floor(Math.random() * result.length)].match(regex)[1]}, this.GetMovieInfo)

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
    


    render(){
       
        return (
            <React.Fragment>
                <h1 className="text-light">{this.state.imdbMovieTitle}</h1>
            </React.Fragment>    
        );

    } 
}



export default GetMovie;