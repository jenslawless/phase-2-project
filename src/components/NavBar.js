import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">

            <ul>
                <NavLink to="/">Origin</NavLink>
                <NavLink to="/homepage">Home Page</NavLink>
                <NavLink to="/newopportunityform">Form</NavLink>
            </ul>
        </div>
    )
}

export default NavBar;