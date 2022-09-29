import React, { Fragment } from "react";
import { Component } from "react/cjs/react.production.min";
import withCounter from "./withCounter";


class Comp1 extends Component {



    render() {
        // const { count } = this.state;
        const { uname, count, incrementHandler } = this.props;
        return (
            <Fragment>
                <button type="button" onClick={incrementHandler}>{uname} Click {count} times</button>
            </Fragment>
        )
    }
}

export default withCounter(Comp1, 5);