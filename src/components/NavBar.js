import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <h1>project volunteer</h1>
            <ul>
                <NavLink to="/organizations">Organizations</NavLink>
                <NavLink to="/homepage">Find an volunteer opportunity</NavLink>
                <NavLink to="/newopportunityform">Form</NavLink>
            </ul>
        </div>
    )
}

export default NavBar;