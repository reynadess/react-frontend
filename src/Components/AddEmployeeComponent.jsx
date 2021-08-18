import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class AddEmployeeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:null,
            email:"",
            name:"",
            role:"EMPLOYEE",
            dateOfBirth: "",
            baseSalary: 10000,
            employeeStatus :"ACTIVE"
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changeBaseSalaryHandler = this.changeBaseSalaryHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this)
    }

    changeEmailHandler(event) {
        this.setState({email: event.target.value});
    }

    changeNameHandler(event) {
        this.setState({name: event.target.value});
    }

    changeRoleHandler(event) {
        this.setState({role: event.target.value});
    }   
    
    changeDateOfBirthHandler(event) {
        this.setState({dateOfBirth: event.target.value});
    }   

    changeBaseSalaryHandler(event) {
        this.setState({baseSalary: event.target.value});
    }       

    saveEmployee(event) {
        event.preventDefault();
        let employee = {
            id: null,
            email:this.state.email,
            name:this.state.name,
            role:this.state.role,
            dateOfBirth:this.state.dateOfBirth,
            baseSalary:this.state.baseSalary,
            employeeStatus:this.state.employeeStatus
        }
        console.log("Employee=>" + JSON.stringify(employee))

        EmployeeService.createEmployee(employee).then(
            res=>{
                this.props.history.push('/employees')
            }
        )
    }

    cancel() {
        this.props.history.push('/employees');
    }
    
    render() {
        return (
            <div>
                <div className = "container">
                    <div className ="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input type="text" placeholder="Email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" placeholder="Name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <label>Role:</label>      
                                    <select class="form-select" aria-label="Default select example" value={this.state.role} onChange={this.changeRoleHandler}>
                                        <option value="ADMIN">ADMIN</option>
                                        <option value="EMPLOYEE">EMPLOYEE</option>
                                    </select>
                                    <label htmlFor="dateOfBirth">Date of birth:</label>
                                    <div className="input-group date">
                                    <input
                                        className="form-control"
                                        id="date"
                                        label="Choose your birthdate"
                                        type="date"
                                        defaultValue="1999-05-24"
                                        InputLabelProps={{
                                        shrink: true,
                                        }}
                                        value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}
                                    />
                                    </div>    
                                    <div className="form-group">
                                        <label>Base Salary:</label>
                                        <input type="number" placeholder="Base Salary" name="baseSalary" className="form-control"
                                         value={this.state.baseSalary} onChange={this.changeBaseSalaryHandler} step="0.01" min="10000"/>
                                    </div>
                                    <br />
                                    <button type="button" class="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button type="button" class="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
