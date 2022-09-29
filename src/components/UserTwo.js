import React, { Component } from 'react'

export class UserTwo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementHandler = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementHandler)}
            </div>
        )
    }
}

export default UserTwo
