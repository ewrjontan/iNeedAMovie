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

import { Fade } from 'react-animation-components'



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
                    <Fade in>
                        <Switch>
                            <Route path='/home' component={HOMEPAGE} />
                            
                            <Route path='/getinterests' component={GetInterests} />

                            <Route path='/justpick' component={JustPick} />

                            <Route path='/issues' component={ReportIssues} />

                            <Redirect to='/home' />

                        </Switch>
                    </Fade>

                <Footer />
        
            </div>    
        );

    } 
}

export default Main;
