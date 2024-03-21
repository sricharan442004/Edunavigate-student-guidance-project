import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const API_URL = "http://localhost:5038/";

// Define your custom theme
const ColorTheme = createTheme({
  components: {},
  palette: {},
});

export default function Intermediate() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const refreshcourses = async () => {
      try {
        const response = await fetch(`${API_URL}api/mernproject/GetCoursesPG`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
        setError('');
      } catch (error) {
        setError('Error fetching data');
        navigate('/404');
      }
    };

    refreshcourses();
  }, [navigate]);

  const columns = [
    { field: 'sno', headerName: 'S.No', width: 50 },
    { field: 'course', headerName: 'Course', width: 150 },
    { field: 'duration', headerName: 'Duration', width: 150 },
    { field: 'institutes', headerName: 'Institutes', width: 250 },
    { field: 'eligibility', headerName: 'Eligibility', width: 180 },
    { field: 'job', headerName: 'Job', width: 200 },
    { field: 'sal', headerName: 'salary', width: 100 },
  ];

  return (
    <div>
      <div style={{ position: 'fixed', zIndex: '-1', top: '0', left: '0', width: '100%', height: '100%', overflow: 'hidden', filter: 'brightness(0.3)' }}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src='src/assets/Degreebg.mp4' type='video/mp4' />
        </video>
      </div>
      <div>
        {error ? null : (
          <ThemeProvider theme={ColorTheme}>
            <DataGrid
              rows={courses.map((course, index) => ({ id: index, ...course }))}
              columns={columns}
              pageSize={10}
              components={{ Toolbar: GridToolbar }}
              style={{ color: 'white', alignItems: 'center' }} // Set text color to white and center content
            />
          </ThemeProvider>
        )}
      </div>
    </div>
  );
}
