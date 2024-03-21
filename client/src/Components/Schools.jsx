import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const API_URL = "http://localhost:5038/";

const ColorTheme = createTheme({
  components: {},
  palette: {},
});

export default function Schools() {

  const [schools, setSchools] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const refreshSchools = async () => {
      try {
        const response = await fetch(`${API_URL}api/mernproject/GetschoolsList`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSchools(data);
        setError('');
      } catch (error) {
        setError('Error fetching data');
        navigate('/404');
      }
    };

    refreshSchools();
  }, [API_URL, navigate]);

  const columns = [
    { field: 'sno', headerName: 'S.No', width: 50 },
    { field: 'city', headerName: 'City', width: 100 },
    { field: 'area', headerName: 'Area', width: 150 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'fee', headerName: 'Fee', width: 100 },
    { field: 'board', headerName: 'Board', width: 180 },
    { field: 'type', headerName: 'Type', width: 180 },
    { field: 'gender', headerName: 'Co-ED', width: 100 },
    { field: 'private', headerName: 'Private/Govt', width: 180 },
  ];

  

  return (
    <div>
      <div style={{ position: 'fixed', zIndex: '-1', top: '0', left: '0', width: '100%', height: '100%', overflow: 'hidden', filter: 'brightness(0.3)' }}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src='src/assets/Schoolbg.mp4' type='video/mp4' />
        </video>
      </div>
      <div>
        {error ? null : (
          <ThemeProvider theme={ColorTheme}>
            <DataGrid
              rows={schools.map((course, index) => ({ id: index, ...course }))}
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
