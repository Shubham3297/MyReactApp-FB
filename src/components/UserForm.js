import React, { Component, Fragment } from "react";

class UserForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fname: '',
            lname: '',
            term: false
        }
    }


    //by using name
    inputChaneHandler = (event) => {
        const { type, name, value, checked } = event.target
        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })

        console.log(type);
        console.log(name);
        console.log(value);
    }

    submit = (event) => {
        event.preventDefault();
        if (this.state.fname === '') {
            window.alert("First name is required.");
            return false;    // return false used for stop the if loop after if execution.
        }
        // for reular expression used.
        // if (this.state.fname === '  Regular Expersion used.') {     
        //     window.alert("First name is required.");
        //     return false;    // return false used for stop the if loop after if execution.
        // }
        if (this.state.lname === '') {
            window.alert("Last name is required.");
            return false;    // return false used for stop the if loop after if execution.
        }
        if (this.state.term === false) {
            window.alert("Please accept the term and conditions.");
            return false;    // return false used for stop the if loop after if execution.
        }
        window.alert(JSON.stringify(this.state));
    }
    render() {
        const { fname, lname, term } = this.state;
        return (
            <Fragment>
                <form onSubmit={this.submit}>
                    <div>
                        <strong><label>Enter Your First Name :</label></strong>
                        <input type="text" name="fname" placeholder="Enter Your Fullname" onChange={this.inputChaneHandler} value={fname} />
                    </div>
                    <div>
                        <strong><label>Enter Your Last Name :</label></strong>
                        <input type="text" name="lname" placeholder="Enter Your Lastname" onChange={this.inputChaneHandler} />
                    </div>
                    <div>
                        <input type="checkbox" name="term" onChange={this.inputChaneHandler} />
                        I accept term and conditions.
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </Fragment>
        )
    }
}

export default UserForm;