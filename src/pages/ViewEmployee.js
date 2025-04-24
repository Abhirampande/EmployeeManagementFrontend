import React, { useEffect, useState } from "react";
import { Box, Typography, TableContainer,Paper, } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

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

    return(
      <div>
        <Box
    sx={{
    minHeight: '100vh',
    backgroundImage: 'url("/wallpaper1.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    p: { xs: 2, md: 4 },
  }}
>
  <Box
    sx={{
      bgcolor: 'rgba(255, 255, 255, 0.85)',
      borderRadius: 2,
      p: 3,
      boxShadow: 3,
    }}
  >
    <Typography variant="h4" gutterBottom
    align="center" sx={{ fontWeight: '800', color: '#000000', textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
      mb: 3 }}>
      EMPLOYEE LIST
    </Typography>

    <TableContainer component={Paper} elevation={4}>
      {/* table here */}
    </TableContainer>
  </Box>
  <div>
            <h2 class="Empheading">EMPLOYEE DETAIL</h2>
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Age:</strong> {employee.age}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Mobile:</strong> {employee.mobile}</p>
            <Link to="/">Back to List</Link>
        </div>
</Box>

    

    </div>

  )
    
};

export default ViewEmployee;
