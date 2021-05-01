import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse, NavItem, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render (){
        return(
            <React.Fragment>
                <Navbar dark>
                    <div className="container">         

                        <div className="row col col-xl-8 mx-auto justify-content-between">
                            <NavbarBrand className="col" href="/">
                                <h1 className="d-none d-sm-block mx-auto pl-5">I Need A Movie</h1>
                                <h5 className="d-flex d-sm-none mx-auto pt-2">I Need A Movie</h5>
                            </NavbarBrand>               
                            
                            <NavbarToggler onClick={this.toggleNav} />
                        </div>
                    </div>

                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={this.toggleNav} >Home</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/getinterests" onClick={this.toggleNav} >Let's Find Movie</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/justpick" onClick={this.toggleNav} >Just Pick Something</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/issues" onClick={this.toggleNav} >Report An Issue</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

            </React.Fragment>
            

        );
    }

}

export default Header;