import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/Home";
import EmployeeList from "../src/EmployeeList";
import AddEmployee from "../src/AddEmployee";
import EditEmployee from "../src/EditEmployee";
import ViewEmployee from "../src/ViewEmployee";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/add" element={<AddEmployee />} />
                <Route path="/edit/:id" element={<EditEmployee />} />
                <Route path="/view/:id" element={<ViewEmployee />} />
            </Routes>
        </Router>
    );
}

export default App;

