import React, { useState, useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components';  // Ensure this component exists or remove it
import { usersData } from '../data/constants';  // Assuming customersData is imported from constants
import './Users.css';  // Assuming you have a custom CSS file for styling

const Users = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10);  // Default page size

  // Filter customersData based on search term
  const filteredData = useMemo(() => {
    return usersData.filter((user) =>
      user.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Name', headerName: 'Name', width: 150 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'Contact', headerName: 'Phone', width: 150 },
    { field: 'Address', headerName: 'Address', width: 200 },
  ];

  return (
    <div className="m-4 p-4 bg-white">
      <Header title="Users" category="Page" /> {/* Ensure this component exists or remove it */}

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search Users"
          className="border p-2 rounded-md w-full md:w-1/3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Dropdown for page size */}
        <select
          className="border p-2 rounded-md mt-2 md:mt-0"
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      {/* DataGrid */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 15, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Users;
