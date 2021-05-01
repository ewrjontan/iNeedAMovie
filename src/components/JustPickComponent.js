import React from 'react';
import GetMovie from './GetMovieComponent';

function JustPick(props){

    return (
        <div className="container my-5 pb-5 pb-md-0" style={{minHeight: "80vh"}} >
            <GetMovie genre="random"/>
        </div>
    );
}



export default JustPick;
