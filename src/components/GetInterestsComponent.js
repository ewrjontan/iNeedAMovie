import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            genres: GENRES
        };

        this.genreButton = this.genreButton.bind(this);
    }

    genreButton(){
        console.log("button clicked");
        
        /*let tempArray = this.state.userSelectedGenres;
        const index = tempArray.indexOf(selected);

        if (index < 0) {
            tempArray.push(selected);
        } else {
            tempArray.splice(index, 1);
        }

        this.setState({userSelectedGenres: tempArray});*/

        //console.log(this.state.userSelectedGenres);

    }

    render(){
        
        function RenderGenreButtons({genres}){

            console.log(genres[0]);

            return(
                <div className="mx-auto col mb-5">
                    <div className="row col mx-auto">
                        {genres.map(genre => {
                            return(
                                
                            <Button key={genre.id} outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2" >{genre.genre}</Button>
                                
                            )
                        })}
                    </div>
                </div>
            );
        }




        return (
            <div className="container my-5 pb-5 bg-light">


                <h2 className="text-dark py-5">In order to make the best suggestions, we'll need to know what your interests are.</h2>
                <h4 className="pb-5">Please select your favorite genres.</h4>

                <RenderGenreButtons genres={this.state.genres} />
                <Link to="/getmovie" className="link">
                    <Button color="primary" size="lg" className="col-12 col-md-2">Go</Button>
                </Link>
            </div>
        );
    }
}



export default GetInterests;

/*
                <Switch>

                    <Route exact path='/getmovie' render={() => <GetMovie userdata={this.state.userSelectedGenres} />} />
                </Switch>*/