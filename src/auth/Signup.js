import React, { Component } from "react";
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            isEmpty: true
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateSignUp = this.validateSignUp.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state)
    }
    handleSubmit(event) {
        fetch("http://localhost:3000/api/user", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
                })
    
        }).then(
            (response) => response.json()
        ).then((data) => {
            this.props.setToken(data.sessionToken)
    
        }) 
        event.preventDefault()
    }
    validateSignUp(event){
        this.setState({
            errorMessage: 'Fields must not be empty'
        })
        event.preventDefault();
    }
    render(){
        const submitHandler = !this.state.username ? this.validateSignUp : this.handleSubmit
        return(
            <div>
                <h1>Sign Up</h1>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" name="username" placeholder="enter username" onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="su_password" type="password" name="password" placeholder="enter password"onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}
export default Signup;