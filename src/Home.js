import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
    return (
        <div className="home-container">
            <h1>INFO SERVICE</h1>
            <p>Employee Management System.</p>
            
            <div className="buttons">
                <Link to="/employees" className="btn">View Employees</Link>
                <Link to="/add" className="btn">Add Employee</Link>
            </div>
        </div>
    );
};

export default Home;
