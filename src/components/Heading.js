import React from "react";
import { Component, PureComponent } from "react/cjs/react.production.min";

class Heading extends PureComponent {

    constructor(props) {
        super(props);
    }
    render() {
        console.log("This is heading component.");
        return (
            <h2>{this.props.title}</h2>
        )
    }
}

export default Heading;