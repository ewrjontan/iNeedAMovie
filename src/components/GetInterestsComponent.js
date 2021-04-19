import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import Home from './HomeComponent';
import GetMovie from './GetMovieComponent';
import { GENRES } from '../shared/genres'

import { Switch, Route, Redirect } from 'react-router-dom';



class GetInterests extends Component{

    constructor(props){
        super(props);
        this.state = {
            //userSelectedGenres: []
        };
    }

    onCheckboxBtnClick(selected){
        //console.log(this.state.userSelectedGenres);
        //console.log(selected);
        let tempArray = this.state.userSelectedGenres;
        const index = tempArray.indexOf(selected);

        if (index < 0) {
            tempArray.push(selected);
        } else {
            tempArray.splice(index, 1);
        }

        this.setState({userSelectedGenres: tempArray});
        //console.log(this.state.userSelectedGenres);

    }

    render(){
        


        return (
            <div className="container my-5 pb-5 bg-light">


                <h2 className="text-dark py-5">In order to make the best suggestions, we'll need to know what your interests are.</h2>
                <h4 className="pb-5">Please select your favorite genres.</h4>

                <div className="mx-auto col mb-5">
                    <p>Selected: {JSON.stringify(this.state.userSelectedGenres)}</p>
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.userSelectedGenres.includes(1)}>Action</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.userSelectedGenres.includes(2)}>Adventure</Button>
                    </div>

                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.userSelectedGenres.includes(3)}>Comedy</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => this.onCheckboxBtnClick(4)} active={this.state.userSelectedGenres.includes(4)}>Crime</Button> 
                    </div>
                    
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => this.onCheckboxBtnClick(5)} active={this.state.userSelectedGenres.includes(5)}>Fantasy</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => this.onCheckboxBtnClick(6)} active={this.state.userSelectedGenres.includes(6)}>Historical</Button>
                    </div>
        
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => this.onCheckboxBtnClick(7)} active={this.state.userSelectedGenres.includes(7)}>Horror</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => this.onCheckboxBtnClick(8)} active={this.state.userSelectedGenres.includes(8)}>Romance</Button>          
                    </div>
        
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => this.onCheckboxBtnClick(9)} active={this.state.userSelectedGenres.includes(9)}>Science Fiction</Button>  
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => this.onCheckboxBtnClick(10)} active={this.state.userSelectedGenres.includes(10)}>Thriller</Button>
                    </div>
                
                </div>

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