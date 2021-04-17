import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import JustPick from './JustPickComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

import { MOVIES } from '../shared/movies';


class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: MOVIES
        };
    }

    render(){
        const HOMEPAGE = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route path='/home' component={HOMEPAGE} />
                    <Route exact path='/justpick' render={() => <JustPick movies={this.state.movies} />} />
                    <Redirect to='/home' />
                </Switch>

                <Footer />
        
            </div>    
        );

    } 
}



export default Main;
