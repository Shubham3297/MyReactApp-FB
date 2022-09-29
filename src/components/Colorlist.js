import React from "react";
import { Component } from "react";
import './external.css';
import Heading from "./Heading";

class Colorlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [
                { id: 601, name: "Red" },
                { id: 602, name: "Green" },
                { id: 603, name: "Blue" },
                { id: 604, name: "Pink" }
            ],
            title: "This Is My Title"
        }

        setTimeout(() => {
            let colorsArray = this.state.colors;
            const colorName = this.state.colors.find((c) => c.id == 603);
            // console.log(colorName);
            const colorIndex = this.state.colors.findIndex((c) => c.id == 603);
            // console.log(colorIndex);

            if (colorName) {
                colorsArray.splice(colorIndex, 1, { ...colorName, name: "Black" })
                this.setState({ colors: [...colorsArray] })
            }
        }, 3000)
    }

    titleHeading = () => {
        this.setState(prevState => ({ ...prevState, title: "This Is My Title" }))
    }

    render() {
        console.log("This is color list component.");
        const { colors } = this.state;
        return (
            <React.Fragment>

                {/* heading component access kela */}
                <Heading title={this.state.title}></Heading>
                <button type="button" onClick={this.titleHeading}>Click On It</button>

                <p className="txtSuccess">This is external css.</p>
                <ul>
                    {colors.map((color, index) => {
                        // use of css classes by conditionally.
                        return <li className={index % 2 == 0 ? 'txtSuccess' : 'txtDanger'} key={color.id}>{color.name}</li>
                        // return <li style={{ color: "blue", backgroundColor: "gray" }} key={color.id}>{color.name}</li> (inline css)
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default Colorlist;