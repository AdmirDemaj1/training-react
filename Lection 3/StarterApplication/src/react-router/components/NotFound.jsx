import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Page is not found maybe you have the wrong url</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="home-link">
                Go To Home
            </Link>
        </div>
    )
}

export default NotFound;