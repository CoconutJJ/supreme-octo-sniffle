import * as React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface IProp {

}

interface IState {

}

class Login extends React.Component<IProp, IState> {

    constructor(props: Readonly<IProp>) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
            <h1>Login to Supreme Octo Sniffle</h1>
            <hr/>
                <Form.Group>
                    <Row>
                        <Col md={4} lg={2}>
                            <Form.Control type="text" placeholder="Username" />
                        </Col>
                        <Col md={4} lg={2}>
                            <Form.Control type= "password" placeholder="Password" />
                        </Col>
                        <Col md={2} lg={2}>
                            <Button variant="success">Log In</Button>
                        </Col>
                    </Row>
                </Form.Group>
                <Link to="/forgot-password">Forgot Password?</Link><br/>
                <Link to="/sign-up">Create Account</Link>
            </>
        );
    }
}
export default Login;