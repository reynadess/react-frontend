import React, {Component} from 'react';
import employeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount() {
        employeeService.getEmployees().then((res)=> {
            this.setState({employees:res.data});
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee')
    }

    render() {
        return (
            <> 
                <h2 className="display-5">Employees List</h2>
                <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">Base Salary</th>
                    <th scope="col">Employee Status</th>
                    <th scope="col">Actions</th>
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