import React from "react";
import { Component } from "react/cjs/react.production.min";

const withCounter = (wrapperComp, value) => {

    class WithCounter extends Component {

        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }

        incrementHandler = () => {
            this.setState({ count: this.state.count + value })
        }
        render() {
            // return <wrapperComp {...this.props} incrementHandler={this.incrementHandler} count={this.state.count}></wrapperComp>
            return <wrapperComp {...this.props} incrementHandler={this.incrementHandler} count={this.state.count}></wrapperComp>
        }
    }
    return WithCounter;
}

export default withCounter;