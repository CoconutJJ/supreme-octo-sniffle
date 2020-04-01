import * as React from 'react'
import Button from 'react-bootstrap/Button'
import { Row, Col, Form } from 'react-bootstrap';
interface IProp {

}

interface IState {

}

class Announcements extends React.Component<IProp, IState> {

    constructor(props: Readonly<IProp>) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <h1>Make an Announcement</h1>
                <Form.Group>
                    <Form.Control type="text" placeholder="Announcement Title" /><br />
                    <Form.Control as="textarea" />
                    <Form.Check
                        type="checkbox"
                        label="Allow Replies/Comments"
                    />
                    <Row>
                        <Col>
                            <Button variant="primary">Attach Module</Button>
                        </Col>
                        <Col>
                            <Form.File.Label>Add Attachment</Form.File.Label>
                            <Form.File.Input />
                        </Col>
                    </Row>
                </Form.Group>

            </>
        )
    }
}

export default Announcements;