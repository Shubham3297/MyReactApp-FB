import React from "react";
import { Component } from "react/cjs/react.production.min";

class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.uname === "Varun") {
            throw new Error("Not a User");
        }
        return <h2>Hello {this.props.uname}</h2>
    }
}

export default User;