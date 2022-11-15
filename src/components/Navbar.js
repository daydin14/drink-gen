import React from "react";
import { Link } from "react-router-dom";

// Styling
import "../assets/css/navbar.css";

function Navbar() {
    return(
        <div align="center" class="nav">
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/search">
                <button>Search</button>
            </Link>
            <Link to="/random">
                <button>Random</button>
            </Link>
        </div>
    );
}

export default Navbar;