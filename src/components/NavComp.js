import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as ReactBootStrap from 'react-bootstrap'

class NavComp extends Component {
    render() {
        return (
            <div>
                <ReactBootStrap.Container>
                    <Link to="/home" activeClass={{ color: "green" }}>Home</Link>&nbsp;
                    <Link to="/about">About</Link>&nbsp;
                    <Link to="/details">Details</Link>&nbsp;
                    <Link to="/empData">EmpData</Link>&nbsp;

                </ReactBootStrap.Container>

            </div>
        )
    }
}

export default NavComp
