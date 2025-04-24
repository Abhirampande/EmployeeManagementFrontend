import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
    return (

    <Box
    sx={{
    position: 'relative',
    height: '100vh',
    backgroundImage: 'url("/home.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
  }}
>
     
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    }}
  />
        <Box
        sx={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            pl: { xs: 3, sm: 8, md: 12 },
            maxWidth: '600px',
      
        
        }}>
            <div className="bord">
            <Typography variant="h2"  fontWeight= "bold" mb={2}>
                
            <h1>INFO SERVICE</h1>
            <p>Employee Management System</p>
            </Typography>
            
            <div className="buttons">
                <Button
                 variant="contained"
                 size="medium"
                 component={Link}
                 to="/employees"
                 >

                <Link to="/employees" className="btn">View Employees</Link>
                <Link to="/add" className="btn">Add Employee</Link>
                </Button>
            </div>
            </div>
       
        </Box>
        </Box>
    );
};

export default Home;
