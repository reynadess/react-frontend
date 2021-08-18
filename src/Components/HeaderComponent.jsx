import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <Link className="navbar-brand" to="/">Employee Management System </Link>
            </nav>
            <br />
        </div>
    )
}
