import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import EmployeeService from "./services/EmployeeService";

const ViewEmployee = () => {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployee(response.data);
        });
    }, [id]);

    if (!employee) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Age:</strong> {employee.age}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Mobile:</strong> {employee.mobile}</p>
            <Link to="/">Back to List</Link>
        </div>
    );
    
};

export default ViewEmployee;
