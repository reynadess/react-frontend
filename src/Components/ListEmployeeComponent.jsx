import React, {Component} from 'react';
import employeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees:[]
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.refreshEmployee = this.refreshEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    componentDidMount() {
        employeeService.getEmployees().then((res)=> {
            this.setState({employees:res.data});
        });
    }

    addEmployee() {
        this.props.history.push('/add-employee')
    }

    refreshEmployee() {
        employeeService.getEmployees().then((res)=> {
            this.setState({employees:res.data});
        });
    }

    editEmployee(id){
        this.props.history.push(`/update-employee/${id}`);
    }

    async deleteEmployee(id) {
        await employeeService.deleteEmployee(id);
        this.refreshEmployee();
    }

    render() {
        return (
            <> 
                <h2 className="display-5">Employees List</h2>
                <div className="container">
                    <div className="row">
                    <button className="btn btn-primary col-md-2" onClick={this.addEmployee}>Add Employee</button>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <button type="button" className="btn btn-outline-secondary btn-sm col-md-2" onClick={this.refreshEmployee}>
                        <span className="glyphicon glyphicon-refresh"></span> Refresh
                    </button>
                    </div>
                </div>
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
                                    <td>
                                        <button className="btn btn-info" onClick={() => this.editEmployee(employees.id)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => this.deleteEmployee(employees.id)}>Delete</button>
                                    </td>
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