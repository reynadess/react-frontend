import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <div style={{textAlign: 'center'}}>
            <nav className="navbar navbar-light bg-light justify-content-center">
                <Link className="navbar-brand" to="/">Employee Management System </Link>
            </nav>
            <br />
        </div>
    )
}
