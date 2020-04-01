import * as React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Card, Row, Col, Form } from 'react-bootstrap';
interface IProp {
    submit(s: Array<String>): boolean;
    choices: [{ [opt: string]: string }];
    multiple: boolean;
}

interface IState {
    currentChoices: Array<String>,

}

class MCPoll extends React.Component<IProp, IState> {

    private validChoices = new Set()

    constructor(props: Readonly<IProp>) {
        super(props)

        this.state = {
            currentChoices: []
        }

        for (let i = 0; i < this.props.choices.length; i++) {

            let c = this.props.choices[i]

            this.validChoices.add(c.opt)
        }

    }

    addChoice = (choice: string) => {

        if (!this.validChoices.has(choice)) {
            return
        }

        if (this.props.multiple) {
            this.setState({
                currentChoices: [...this.state.currentChoices, choice]
            })
        } else {
            this.setState({
                currentChoices: [choice]
            })
        }
    }

    renderChoices = () => {
        this.props.choices.forEach(({opt}) => {
            
        })
    }

    render(): React.ReactNode {
        return (null)
    }
}

export default MCPoll;
