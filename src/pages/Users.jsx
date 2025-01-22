import React, { useState, useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components';  // Ensure this component exists or remove it
import { usersData } from '../data/constants';  // Assuming customersData is imported from constants

const Users = () => {

  const handleAddUser = () => {
    // Logic for adding a new user
    alert("Add User button clicked!");
};

const handleExportExcel = () => {
    // Logic for exporting data to Excel
    alert("Export to Excel button clicked!");
};

const handleExportPDF = () => {
    // Logic for exporting data to PDF
    alert("Export to PDF button clicked!");
};

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
    {/* Search Input */}
    <input
        type="text"
        placeholder="Search Users"
        className="border p-2 rounded-md w-full md:w-1/3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
    />

    {/* Buttons */}
    <div className="flex mt-2 md:mt-0 md:ml-4">
        <button
            onClick={handleAddUser}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
        >
            Add User
        </button>
        <button
            onClick={handleExportExcel}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mr-2"
        >
            Export Excel
        </button>
        <button
            onClick={handleExportPDF}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
            Export PDF
        </button>
    </div>
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
