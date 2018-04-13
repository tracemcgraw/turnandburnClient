import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

const Auth = (props) => {  // The Auth class is basically the skeleton of the forms for signup and login. This is the bootstrap/reactstrap.
    return (
        <Container className="auth-container">
            <Row>
                <Col md="6">

                    <Signup setToken={props.setToken} />
                </Col>
                <Col md="6" className='login-col'>

                    <Login setToken={props.setToken} />
                </Col>
            </Row>
        </Container>
    )
}
export default Auth;

// The Login setToken={props.setToken} is the the data were are putting in here.