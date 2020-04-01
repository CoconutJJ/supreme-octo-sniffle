import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../views/sass/main.scss'

interface IProp {

}

interface IState {

}

class DesignPhilosophy extends React.Component<IProp, IState> {

    constructor(props: Readonly<IProp>) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <>
                <h1>Design Philosophy</h1>
                <hr/>
                
                
                <h1>Manifesto</h1>
                <hr/>
                <p>
                    The goal of Supreme Octo Sniffle is to create a high quality
                    learning platform that provides the few sought after features
                    professors have been looking for. The Supreme Octo Sniffle platform
                    is developed under a set of general guidelines.

                    <ol>
                        <li>Should be free to use for both professors and students</li>
                        <li>Should be open-source to foster code collaboration for the betterment of the platform</li>
                        <li>Should provide enough tools to aid in different course teaching styles and course material</li>
                        <li>Should be easily extensible to allow for new features to be implemented quickly</li>
                        <li>Should minimize the number resources that depends on access to this platform</li>
                    </ol>



                </p>

            </>
        )
    }

}
export default DesignPhilosophy; 