import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class EmpData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employee: [],
            customError: ""
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    // fetchData = () => {
    //     axios.get("http://localhost:8888/employee")
    //         .then((res) => {
    //             console.log(res);
    //             this.setState({ employee: res.data })
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             this.setState({ customError: "Database server error" })
    //         })
    // }

    // using await , this and above both are same
    fetchData = async () => {
        const result = await axios.get("http://localhost:8888/employee");
        this.setState({ employee: result.data })
    }

    deleteHandler = (id) => {
        // console.log(id); for check value of id in console
        axios.delete(`${"http://localhost:8888/employee"}/${id}`)
            .then(() => {
                window.alert("Data deleted successfully");
                this.fetchData();
            })
            .catch((error) => {
                window.alert("Something Wrong");
            })
    }

    render() {
        const { employee, customError } = this.state;
        return (
            <Fragment>
                <h2>Employee Details</h2>
                <hr />
                <Link to="/addData" className='btn btn-primary btn-sm'><i className="fa fa-plus" aria-hidden="true"></i>Add Employee</Link>
                <br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.length > 0 && employee.map((data, index) => {
                                return < tr key={index}>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.address}</td>
                                    <td>{data.contact}</td>
                                    <td>
                                        <button type='button' className='btn btn-outline-success btn-sm'>
                                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </button> ||
                                        <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => this.deleteHandler(data.id)}>
                                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                {customError ? <strong>{customError}</strong> : null}
            </Fragment >
        )
    }
}

export default EmpData
