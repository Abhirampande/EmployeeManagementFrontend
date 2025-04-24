import React, { useState } from "react";
import{Box, TextField, Button, Typography, Paper, Grid,} from '@mui/material';
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

const AddEmployee = () => {
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        department: "",
        email: "",
        mobile: "",
    });

    const [error, setErrors] = useState({});
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
            })
            .catch((error) => {
                console.error('Failed to add employee:', error);
            
            });
            
        }
    };

    <div style={{ marginTop: "20px", textAlign: "center"}}>
                <Link to="/" className="btn">Back to Home</Link>
    </div>

return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e0f7fa, #80deea)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, width: '100%', maxWidth: 600 }}>
        <Typography variant="h5" gutterBottom align="center">
          ADD NEW EMPLOYEE
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
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
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: '#24babc',
                px: 4,
                py: 1,
                fontSize: '1rem',
                borderRadius: '20px',
                '&:hover': { backgroundColor: '#1ca2a5' },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
    

 /*return (
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
        
        
    );*/
};

export default AddEmployee;
