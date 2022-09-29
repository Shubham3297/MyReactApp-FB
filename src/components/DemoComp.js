import React, { Component } from 'react'

export class DemoComp extends Component {

    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div>
                <h2>{this.props.render(true)}</h2>
            </div>
        )
    }
}

export default DemoComp
