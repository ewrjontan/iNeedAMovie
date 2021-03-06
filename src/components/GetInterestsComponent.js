import React, { Component } from 'react';
import { Button } from 'reactstrap';
import GetMovie from './GetMovieComponent';
import { GENRES } from '../shared/genres'
//import { GENRESIMDB } from '../shared/genresIMDB'

class GetInterests extends Component{
    constructor(props){
        super(props);
        this.state = {
            containerBg: "bg-light",
            userSelectedGenres: [],
            genres: GENRES,
            randomUserGenre: null,
            goButtonClicked: false
        };

    }

    goButtonClick = () => {
        this.setState({goButtonClicked: true});
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

        this.chooseRandomGenre(tempArray);
    }


    chooseRandomGenre = (userList) => {
        let randomGenre = userList[Math.floor(Math.random() * userList.length)];
    
        console.log(randomGenre);

        this.setState({randomUserGenre: randomGenre.toLowerCase()});
    }

    render(){
        
        function RenderButtonsOrMovie(props){

            if (props.goButtonClicked){//renders card with movie recommendation
                
                return(
                    <React.Fragment>
                        <GetMovie genre={props.randomUserGenre}/>
                    </React.Fragment>
                )
    
                
            }else{//renders buttons for selecting genres
                return(
                    <div className="container bg-light mb-5">
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

                        <Button color="primary" size="lg" className="col-12 col-md-2 mb-5" onClick={props.goButtonClick}>Go</Button>
                    </div>
                );
            }
        }

        return (
            <div className={`container mt-5 pb-5 pb-md-0`} style={{minHeight: "80vh"}} >
            
                <RenderButtonsOrMovie genres={this.state.genres} genreButtonClick={this.genreButtonClick} userSelectedGenres={this.state.userSelectedGenres} goButtonClicked={this.state.goButtonClicked} goButtonClick={this.goButtonClick} randomUserGenre={this.state.randomUserGenre}/>
            </div>
        );
    }
}

export default GetInterests;
