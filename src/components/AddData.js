import React, { Component } from 'react'
import axios from 'axios'

class AddData extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            contact: ''
        }
    }

    inputChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = (event) => {
        axios.post("http://localhost:8888/employee", this.state)
            .then((res) => {
                console.log(res)

            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        const { name, address, contact } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        Enter employee name :
                        <input type="text" name='name' onChange={this.inputChangeHandler} placeholder='Enter employee name' value={name} />
                    </div><br />
                    <div>
                        Enter employee address :
                        <input type="text" name='address' onChange={this.inputChangeHandler} placeholder='Enter employee address' value={address} />
                    </div><br />
                    <div>
                        Enter employee contact :
                        <input type="text" name='contact' onChange={this.inputChangeHandler} placeholder='Enter employee contact' value={contact} />
                    </div><br />
                    <div>
                        <button type='submit' className='btn btn-primary btn-sm'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddData
