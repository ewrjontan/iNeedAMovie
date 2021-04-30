import React from 'react';

export const Loading = () => {
    return (
        <div className="col">
            <i className="fas fa-spinner fa-spin fa-3x fa-fw text-primary"/>
            <p>Loading...</p> 
        </div>
    );
}