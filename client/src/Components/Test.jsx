import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

function Test() {
    const API_URL = "http://localhost:5038/";

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
        { field: 'sno', headerName: 'S.No', width: 100 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'area', headerName: 'Area', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'fee', headerName: 'Fee', width: 120 },
        { field: 'board', headerName: 'Board', width: 150 },
        { field: 'type', headerName: 'Type', width: 120 },
        { field: 'gender', headerName: 'Co-ED', width: 120 },
        { field: 'private', headerName: 'Private/Govt', width: 180 },
    ];

    return (
        <div style={{ height: '100%', width: '100%' }}>
            {error ? (
                <div>Error fetching data</div>
            ) : (
                <DataGrid
                    rows={schools.map((school, index) => ({ id: index, ...school }))}
                    columns={columns}
                    pageSize={5}
                    components={{ Toolbar: GridToolbar }}
                />
            )}
        </div>
    );
}

export default Test;
