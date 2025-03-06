import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "./services/EmployeeService";
import { Link } from "react-router-dom";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        department: "",
        email: "",
        mobile: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    

    const validate = () => {
        let tempErrors = {};
        if (!employee.name) tempErrors.name = "Name is required";
        if (!employee.age || employee.age < 18 || employee.age > 65) tempErrors.age = "Age must be between 18 and 65";
        if (!employee.department) tempErrors.department = "Department is required";
        if (!/^\S+@\S+\.\S+$/.test(employee.email)) tempErrors.email = "Invalid email format";
        if (!/^\d{10}$/.test(employee.mobile)) tempErrors.mobile = "Mobile must be 10 digits";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            EmployeeService.createEmployee(employee).then(() => {
                navigate("/");
            });
            
        }
    };

    <div style={{ marginTop: "20px", textAlign: "center"}}>
                <Link to="/" className="btn">Back to Home</Link>
    </div>
    

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} />
                <span>{errors.name}</span>

                <input type="number" name="age" placeholder="Age" value={employee.age} onChange={handleChange} />
                <span>{errors.age}</span>

                <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} />
                <span>{errors.department}</span>

                <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} />
                <span>{errors.email}</span>

                <input type="text" name="mobile" placeholder="Mobile" value={employee.mobile } onChange={handleChange} />
                <span>{errors.mobile}</span>
            <div className="btn-container">
                <button type="submit">Add Employee</button>
            </div>
            </form>
        </div>
        
        
    );
};

export default AddEmployee;
