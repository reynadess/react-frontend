import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            id:this.props.match.params.id,
            email:"",
            name:"",
            role:"",
            dateOfBirth: "",
            baseSalary: 0,
            employeeStatus :"",
            error:""
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeRoleHandler = this.changeRoleHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changeBaseSalaryHandler = this.changeBaseSalaryHandler.bind(this);
        this.changeEmployeeStatusHandler = this.changeEmployeeStatusHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this)
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res)=> {
            let employee = res.data;
            this.setState({
                email: employee.email,
                name: employee.name,
                role: employee.role,
                dateOfBirth: employee.dateOfBirth,
                baseSalary: employee.baseSalary,
                employeeStatus: employee.employeeStatus
            })
        }).catch((err) => {
            this.props.history.push('/error', {error: err.response.data});
        });        
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

    changeEmployeeStatusHandler(event) {
        this.setState({employeeStatus: event.target.value});
    }   

    updateEmployee(event) {
        event.preventDefault();
        let employee = {
            id: this.state.id,
            email:this.state.email,
            name:this.state.name,
            role:this.state.role,
            dateOfBirth:this.state.dateOfBirth,
            baseSalary:this.state.baseSalary,
            employeeStatus:this.state.employeeStatus
        }
        console.log("Employee=>" + JSON.stringify(employee))

        EmployeeService.updateEmployee(employee).then(
            res=>{
                this.props.history.push(`/`);
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
                            <h3 className="text-center">Update Employee</h3>
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
                                    <select className="form-select" aria-label="Default select example" value={this.state.role} onChange={this.changeRoleHandler}>
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
                                        value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}
                                    />
                                    </div>    
                                    <div className="form-group">
                                        <label>Base Salary:</label>
                                        <input type="number" placeholder="Base Salary" name="baseSalary" className="form-control"
                                         value={this.state.baseSalary} onChange={this.changeBaseSalaryHandler} step="0.01" min="10000"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Employee Status:</label>
                                        <select className="form-select" aria-label="Default select example" value={this.state.employeeStatus} onChange={this.changeEmployeeStatusHandler}>
                                            <option value="ACTIVE">ACTIVE</option>
                                            <option value="INACTIVE">INACTIVE</option>
                                        </select>                                        
                                    </div>                                    
                                    <br />
                                    <button type="button" className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                    <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}
