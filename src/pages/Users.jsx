import React, { useState, useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components'; // Ensure this component exists or remove it
import { usersData } from '../data/constants'; // Assuming customersData is imported from constants

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

  const handleEdit = (id) => {
    // Logic for editing a user
    alert(`Edit button clicked for user ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic for deleting a user
    alert(`Delete button clicked for user ID: ${id}`);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(10); // Default page size

  // Filter customersData based on search term
  const filteredData = useMemo(() => {
    return usersData.filter((user) =>
      user.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const columns = [
     { field: 'Name', headerName: 'Name', width: 150 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'Contact', headerName: 'Phone', width: 150 },
    { field: 'Position', headerName: 'Position', width: 150 },
    {field: 'Years_Served', headerName: 'Years Served', width: 150},
    { field: 'Address', headerName: 'Address', width: 200 },
    {
      field: 'Action',
      headerName: 'Action',
      renderCell: (params) => (
        <div className="flex gap-2">
         <button className="mr-4" title="Edit" onClick={handleEdit}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-blue-500 hover:fill-blue-700"
                  viewBox="0 0 348.882 348.882">
                  <path
                    d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                    data-original="#000000" />
                  <path
                    d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                    data-original="#000000" />
                </svg>
              </button>
              <button className="mr-4" title="Delete" onClick={handleDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 fill-red-500 hover:fill-red-700" viewBox="0 0 24 24">
                  <path
                    d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                    data-original="#000000" />
                  <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                    data-original="#000000" />
                </svg>
              </button>
        </div>
      ),
    },
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
