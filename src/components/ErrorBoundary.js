import React from "react";
import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    // getDerivedStateFromError is component lifecycle method which will execute when an error occure in component.
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    //componentDidCatch is component lifecycle method which will display error information.
    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }
    render() {
        if (this.state.hasError) {
            // throw new Error("Something went wrong.")
            return <h2>Something went wrong.</h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;