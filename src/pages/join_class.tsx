import * as React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


interface IProp {

}

interface IState {

}

class JoinClass extends React.Component<IProp, IState> {

    constructor(props: Readonly<IProp>) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <h1>Join a Class</h1>

                <Form.Control type="text" placeholder="Course Code"/>

            </>


        )


    }



}
export default JoinClass