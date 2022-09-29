import React, { Fragment } from "react";
import { Component } from "react/cjs/react.development";
import './external.css';   // Use of external CSS.  
import mycss from './myStyle.module.css'; // In rename, S is small s ahe sir cya file madhe

class CssInReact extends Component {

    mycss = {
        color: "red",
        // fontFamily: "Fantasi",
        backgroundColor: "stateBlue"
    }

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <>
                <h3 style={{ color: "blue", backgroundColor: "lightgray", textAlign: "center" }}>This is my inline CSS.</h3>
                <p style={this.mycss}>This is my dumy text.</p>
                <h5>This is external CSS.</h5>
                <p className={mycss.myTitle}>Here, We use CSS as Module.</p>
            </>
        )
    }
}

export default CssInReact;