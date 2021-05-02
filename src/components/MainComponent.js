import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import GetInterests from './GetInterestsComponent';
import ReportIssues from './ReportIssuesComponent';


import JustPick from './JustPickComponent';
import Footer from './FooterComponent';

import { Switch, Route, Redirect } from 'react-router-dom';

import { GENRES } from '../shared/genres'
import { MOVIES } from '../shared/movies';



class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            movies: MOVIES,
            genres: GENRES
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
                        
                        <Route path='/getinterests' component={GetInterests} />

                        <Route path='/justpick' component={JustPick} />

                        <Route path='/issues' component={ReportIssues} />

                        <Redirect to='/home' />

                    </Switch>

                <Footer />
        
            </div>    
        );

    } 
}



//export default Main;

export default Main;


/*<Route exact path='/getmovie' render={() => <GetMovie genre={this.state.randomUserGenre}/>} />*/

//                    <Route path='/home' component={GetMovie} />

//                    <Route exact path='/justpick' render={() => <JustPick movies={this.state.movies} />} />

//                    <Route exact path='/getinterests' render={() => <GetInterests movies={this.state.movies} />} />
