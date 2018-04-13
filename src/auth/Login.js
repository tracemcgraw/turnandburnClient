import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{ //We are creating a class called Login 
    constructor(props){         //Our constructor will pass props to our object and store it.
        super(props)
        this.state = {          //The state has properties of username, password, userId.
            username: '',
            password: '',
            userId: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this) 
    }
    handleChange = (event) => {
        console.log('something change');
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) =>{
        fetch("http://localhost:3000/api/user/login", {
            method: 'POST',
            body: JSON.stringify({user: this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(data => this.props.setToken(data.sessionToken))
            // this.props.setToken(data.sessionToken)
            // this.props.addImage(data.user.img)
        // })
        //save our token
        //prevent deault
        event.preventDefault()
    }
    render(){
        return(
            <div>
                <h1>Login</h1>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password"onChange={this.handleChange}/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}
export default Login;