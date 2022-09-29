import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class HoverCounter extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         count: 0
    //         // uname: "Admin"
    //     }
    // }

    // incrementHandler = () => {
    //     this.setState({ count: this.state.count + 1 })
    // }

    render() {
        const { count, uname } = this.props;
        return (
            <div>
                <h3 onMouseOver={this.incrementHandler}>{uname} Hover {count} times.</h3>
            </div>
        )
    }
}

export default HoverCounter;