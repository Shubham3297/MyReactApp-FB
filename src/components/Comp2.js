import React, { Fragment } from "react";
import { Component } from "react/cjs/react.production.min";
import withCounter from "./withCounter";


class Comp2 extends Component {


    render() {
        // const { count } = this.state;
        const { uname, count, incrementHandler } = this.props;

        return (
            <Fragment>
                <h2 onMouseOver={incrementHandler}>{uname} Click {count} times</h2>
            </Fragment>
        )
    }
}

export default withCounter(Comp2, 4);