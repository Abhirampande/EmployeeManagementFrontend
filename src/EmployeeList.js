import React, { useEffect, useState } from "react";
import EmployeeService from "./services/EmployeeService";
import { Link } from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        EmployeeService.getEmployees().then((response) => {
            setEmployees(response.data);
        });
    };

    const deleteEmployee = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            EmployeeService.deleteEmployee(id).then(() => {
                fetchEmployees();
            });
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <Link to="/add">Add Employee</Link>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.department}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobile}</td>
                            <td>
                                <Link to={`/view/${employee.id}`}>View</Link> |  
                                <Link to={`/edit/${employee.id}`}>Edit</Link> |  
                                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: "20px", textAlign: "center"}}>
                <Link to="/" className="btn">Back to Home</Link>
            </div>
        </div>
    );
};

export default EmployeeList;
