import React from "react";
import { Component } from "react";

class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: true
        }
    }

    render() {

        const { isLogin } = this.state;

        let msg;


        //1- if..else
        // if (isLogin) {
        //     // return <h3>Admin Login</h3>
        //     msg = "Admin Login";
        // } else {
        //     // return <h3>User Login</h3>
        //     msg = "User Login";
        // }

        //2- element variable
        // return <h3>{msg}</h3>;

        //3- ternary
        // return isLogin ? <h3>Admin Login</h3> : <h3>User Login</h3>

        // 4 - short - circuit
        return isLogin && <h3>Admin Login </h3>
    }
}

export default Message;