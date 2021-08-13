import React, {Component} from 'react';
import employeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[]
        }
    }

    componentDidMount() {
        employeeService.getEmployees().then((res)=> {
            this.setState({employees:res.data});
        });
    }

    render() {
        return (
            <> 
                <h2 className="display-5">Employees List</h2>
                <table className="table table-hover table-bordered">
                <thead className="thead-light">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">Base Salary</th>
                    <th scope="col">Employee Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(employees=>
                                <tr key= {employees.id} >
                                    <td>{employees.id}</td>
                                    <td>{employees.name}</td>
                                    <td>{employees.email}</td>
                                    <td>{employees.role}</td>
                                    <td>{employees.dateOfBirth}</td>
                                    <td>{employees.baseSalary}</td>
                                    <td>{employees.employeeStatus}</td>
                                </tr>
                            )
                    }
                </tbody>
                </table>
            </>
        )
    }
}

export default ListEmployeeComponent