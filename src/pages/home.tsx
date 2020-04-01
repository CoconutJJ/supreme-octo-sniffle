import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../views/sass/main.scss'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Card, Row, Col } from 'react-bootstrap';
interface IProp {

}

interface IState {

}

class Home extends React.Component<IProp, IState> {

    constructor(props: Readonly<IProp>) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <Jumbotron style={{ clear: "both" }}>
                    <h1>Supreme Octo Sniffle</h1>
                    <p>
                        Supreme Octo Sniffle is a free online learning
                        platform for professors and teachers alike to design
                        interactive online modules and quizzes without falling
                        prey to price gouging software many education publishing
                        companies produce.
                    </p>
                    <Button variant="primary">Sign Up</Button>
                </Jumbotron>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Design Philosophy</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
                                <Card.Text>
                                
                                </Card.Text>
                                <Card.Link href="/design-philosophy">Learn More </Card.Link>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </>
        )
    }

}
export default Home; 