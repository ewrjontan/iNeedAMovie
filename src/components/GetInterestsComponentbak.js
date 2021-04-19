import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class GetInterests extends Component{

    constructor(props){
        super(props);
        this.state = {
            userSelectedGenres: [2]
        };
    }

    render(){

        const SetGenreButtons = () => {
            const [cSelected, setCSelected] = useState([]);
          
            const onCheckboxBtnClick = (selected) => {
                const index = cSelected.indexOf(selected);
        
                if (index < 0) {
                cSelected.push(selected);
                } else {
                cSelected.splice(index, 1);
                }

                setCSelected([...cSelected]);
                
            }
        
            return (
                <div className="mx-auto col mb-5">
                    <p>Selected: {JSON.stringify(cSelected)}</p>
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Action</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>Adventure</Button>
                    </div>
                    
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Comedy</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>Crime</Button> 
                    </div>
                    
        
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => onCheckboxBtnClick(5)} active={cSelected.includes(5)}>Fantasy</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => onCheckboxBtnClick(6)} active={cSelected.includes(6)}>Historical</Button>
                    </div>
        
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => onCheckboxBtnClick(7)} active={cSelected.includes(7)}>Horror</Button>
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => onCheckboxBtnClick(8)} active={cSelected.includes(8)}>Romance</Button>          
                    </div>
        
                    <div className="row mb-2">
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto mb-2 mb-md-0" onClick={() => onCheckboxBtnClick(9)} active={cSelected.includes(9)}>Science Fiction</Button>  
                        <Button outline color="secondary" size="lg" className="col-12 col-md-5 mx-auto" onClick={() => onCheckboxBtnClick(10)} active={cSelected.includes(10)}>Thriller</Button>
                    </div>
                </div>
            );
        }


        return (
            <div className="container my-5 pb-5 bg-light">
                <h2 className="text-dark py-5">In order to make the best suggestions, we'll need to know what your interests are.</h2>
                <h4 className="pb-5">Please select your favorite genres.</h4>

                <SetGenreButtons/>

                <Link>
                    <Button color="primary" size="lg" className="col-12 col-md-2">Go</Button>
                </Link>
            </div>
        );
    }
}



export default GetInterests;
