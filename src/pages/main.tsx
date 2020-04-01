import * as React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../views/sass/main.scss'
import { Nav, Navbar, Form, Button } from 'react-bootstrap';
import Home from './home'
import DesignPhilosophy from './design_philosophy'
import Announcements from './announcements'
import Login from './login';
import JoinClass from './join_class'
interface IProp {

}

interface IState {

}

class Main extends React.Component<IProp, IState> {

    constructor(props: Readonly<IProp>) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <Router>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Supreme Octo Sniffle</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-primary" onClick={() => window.location.href = '/login'}>Log In</Button>
                        </Form>
                    </Navbar>
                    <div className="body-content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/design-philosophy">
                                <DesignPhilosophy />
                            </Route>
                            <Route exact path="/make-announcement">
                                <Announcements />
                            </Route>
                            <Route exact path="/login">
                                <Login />
                            </Route>
                            <Route exact path="/join-class">
                                <JoinClass/>
                            </Route>

                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (d: any) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);