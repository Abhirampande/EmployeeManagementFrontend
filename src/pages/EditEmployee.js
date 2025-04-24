import React, { useEffect, useState } from "react";
import {Box, TextField, Button, Typography, Paper, Grid} from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        department: "",
        email: "",
        mobile: "",
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setEmployee(response.data);
        });
    }, [id]);

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

    const handleUpdate = (e) => {
        e.preventDefault();
        if (validate()) {
            EmployeeService.updateEmployee(id, employee).then(() => {
                navigate("/");
            });
        }
    };

    

return (
    <div>
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("/blue.jpg")', // Replace with your actual path
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" gutterBottom align="center">
          EDIT EMPLOYEE
        </Typography>

        <Box component="form" onSubmit={handleUpdate}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                label="Name"
                fullWidth
                required
                value={employee.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="age"
                label="Age"
                type="number"
                fullWidth
                required
                value={employee.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="department"
                label="Department"
                fullWidth
                required
                value={employee.department}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                fullWidth
                required
                value={employee.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="mobile"
                label="Mobile"
                type="tel"
                fullWidth
                required
                value={employee.mobile}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Box mt={3} textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#7b1fa2',
                px: 4,
                py: 1,
                fontSize: '1rem',
                borderRadius: '20px',
                '&:hover': { backgroundColor: '#6a1b9a' },
              }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
    <div style={{ marginTop: "20px", textAlign: "center"}}>
                <Link to="/" className="btn">Back to Home</Link>
            </div>
    </div>
  );



    /*return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} />
                <span>{errors.name}</span>

                <input type="number" name="age" placeholder="Age" value={employee.age} onChange={handleChange} />
                <span>{errors.age}</span>

                <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} />
                <span>{errors.department}</span>

                <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} />
                <span>{errors.email}</span>

                <input type="text" name="mobile" placeholder="Mobile" value={employee.mobile} onChange={handleChange} />
                <span>{errors.mobile}</span>

                <button type="submit">Update Employee</button>
            </form>
        </div>
        
    );*/
};

export default EditEmployee;
