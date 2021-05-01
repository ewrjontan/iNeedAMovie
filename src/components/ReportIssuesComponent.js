import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Col } from 'reactstrap';


class ReportIssues extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            feedback: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current state is: ' + JSON.stringify(this.state));
        alert('Current state is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }


    render(){
    
        return (
            <div className="container my-5 pb-5 pb-md-0 col-12 col-sm-8 col-lg-4">
                <h1 className="text-white my-5">Report an issue</h1>
                <p className="text-white mb-4">Please submit a detailed description of your issue and we will address it as soon as possible. Your feed back is much appreciated.</p>

                <Form onSubmit={this.handleSubmit}>
                    
                    <FormGroup>
                        <Input type="text" id="name" name="name" placeholder="Full name" value={this.state.name} onChange={this.handleInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="email" id="email" name="email" placeholder="Email address" value={this.state.email} onChange={this.handleInputChange}/>
                    </FormGroup>

                    <FormGroup>
                        <Input type="textarea" id="feedback" name="feedback" rows="12" placeholder="Enter feedback"  value={this.state.feedback} onChange={this.handleInputChange}/>
                    </FormGroup>

                    <FormGroup className="mt-5">
                        <Button type="submit" color="primary">
                            Send Feedback
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}


export default ReportIssues;
