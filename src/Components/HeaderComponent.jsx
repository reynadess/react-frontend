import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <div style={{textAlign: 'center'}}>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <Link className="navbar-brand" to="/">Employee Management System </Link>
                <Link className="navbar-link" to="/add-employee">Add Employee</Link>
            </nav>
            <br />
        </div>
    )
}
