import React from 'react';
import { Component } from 'react';
import Button from './Button';

class ClickCounter extends Component {

    // constructor(props) {
    //     super();
    //     this.state = {
    //         count: 0
    //         // uname: "Rani"
    //     }
    //     // setTimeout(() => (this.setState({ count: this.state.count + 5 })), 1000);  // Change state property
    //     // setTimeout(() => (this.setState((prevSate) => ({ count: prevSate.count + 5 }))), 2000);  // change state
    // }

    // incrementHandler = (msg) => {
    //     this.setState({ count: this.state.count + 1 });
    //     // window.alert(msg);
    // }

    render() {
        // console.log("This is click counter component");
        const { name, post } = this.props;  //destructuring props
        const { count, uname } = this.state;   // destructuring state property

        return (
            <div>
                {/* <h3>This is {name}.</h3>
                <p>Your post is {post}.</p> */}
                <button type="button" onClick={this.incrementHandler}>{name} Click{count} times</button>

                {/* <Button name={name} post={post} incrementHandler={this.incrementHandler}></Button> */}
            </div>
        )
    }
}

export default ClickCounter;