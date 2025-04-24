import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "../src/Home";
import EmployeeList from "../src/pages/EmployeeList";
import AddEmployee from "../src/pages/AddEmployee";
import EditEmployee from "../src/pages/EditEmployee";
import ViewEmployee from "../src/pages/ViewEmployee";

import './App.css';

function App() {
    return (
        <Router>
            <Navbar/>
            <div className="app-container">
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/add" element={<AddEmployee />} />
                <Route path="/edit/:id" element={<EditEmployee />} />
                <Route path="/view/:id" element={<ViewEmployee />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;

