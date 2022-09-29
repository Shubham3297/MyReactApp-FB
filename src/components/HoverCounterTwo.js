import React, { Fragment } from "react";
import { Component } from "react/cjs/react.production.min";



class HoverCounterTwo extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementHandler = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }


    render() {
        // const { count } = this.state;
        const { incrementHandler, count } = this.props;
        return (
            <Fragment>
                <h2 onMouseOver={incrementHandler}>Click {count} times</h2>
            </Fragment>
        )
    }
}

export default HoverCounterTwo;