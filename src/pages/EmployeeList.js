import { Box, Typography, Table, TableHead, TableBody, TableRow, TableCell, TableContainer,Paper, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";


const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

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
        <Box sx={{ p: { xs: 2, md: 4 } }}>
          <Typography variant="h4" gutterBottom>
            EMPLOYEE LIST
          </Typography>
    
          <TableContainer component={Paper} elevation={4}>
            <Table>
              <TableHead sx={{ bgcolor: 'primary.main' }}>
                <TableRow >
                  <TableCell sx={{ color: '#fff' }}>Name</TableCell>
                  <TableCell sx={{ color: '#fff' }}>Age</TableCell>
                  <TableCell sx={{ color: '#fff' }}>Department</TableCell>
                  <TableCell sx={{ color: '#fff' }}>Email</TableCell>
                  <TableCell sx={{ color: '#fff' }}>Mobile</TableCell>
                  <TableCell sx={{ color: '#fff' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((emp) => (
                  <TableRow key={emp.id} >
                    <TableCell sx={{ color: '#fff' }}>{emp.name}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{emp.age}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{emp.department}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{emp.email}</TableCell>
                    <TableCell sx={{ color: '#fff' }}>{emp.mobile}</TableCell>
                    <TableCell>
                    <Link to={`/view/${emp.id}`}>View</Link>
                    
                      <IconButton onClick={() => navigate(`/edit/${emp.id}`)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => deleteEmployee(emp.id)} color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        

      <div style={{ marginTop: "20px", textAlign: "center"}}>
      <Link to="/" className="btn">Back to Home</Link>
      </div>
      </div>
    );
};
    
    

    /*return (
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
};*/

export default EmployeeList;
