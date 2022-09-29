import React, { Component } from 'react'

class FavourateColor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: "red"
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         color: props.color
    //     }
    // }

    shouldComponentUpdate() {
        return true;
    }

    //before render method executed.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("beforeUpdate").innerHTML = `Before update , My favourite color was :${prevState.color} `
        return null;
    }

    //after render method executed.
    componentDidUpdate() {
        document.getElementById("afterUpdate").innerHTML = `After update , My favourite color was :${this.state.color} `

    }

    // componentDidMount() {
    //     setTimeout(() => this.setState({ color: "Pink" }), 1000)
    // }

    componentWillUnmount() {
        console.log('by');
    }

    colorChangeHandler = () => {
        this.setState({ color: "Green" });
    }
    render() {
        return (
            <div>
                <h3>My favourite color is: {this.state.color}</h3>
                <button type='button' onClick={this.colorChangeHandler}>Change Color</button>
                <div id='beforeUpdate'></div>
                <div id='afterUpdate'></div>
            </div>
        )
    }
}

export default FavourateColor
