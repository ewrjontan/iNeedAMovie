import React from 'react';


export const Loading = () => {
    return (
        <div className="mx-auto text-white" id="loading">
            <i className="fas fa-spinner fa-spin fa-8x"/>
            <h1 className="mt-5">Finding the perfect movie...</h1> 
        </div>
    );
}