import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import { TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { newsData, newsGrid } from '../data/constants';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const News = () => {
  const { currentColor } = useStateContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  // Filter the news data based on the search term
  const filteredNewsData = useMemo(
    () =>
      newsData.filter((news) =>
        news.Name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm]
  );

  // Handle selection
  const handleSelection = (newSelection) => {
    setSelectedRows(newSelection.selectionModel);
  };

  // Export to Excel
  const handleExportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredNewsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'News');
    XLSX.writeFile(workbook, 'NewsData.xlsx');
  };

  // Export to PDF
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.text('News Data', 20, 10);
    doc.autoTable({
      head: [['Name', 'Description', 'Date', 'Status']],
      body: filteredNewsData.map((news) => [
        news.Name,
        news.Description,
        news.Date,
        news.Status,
      ]),
    });
    doc.save('NewsData.pdf');
  };

  // Define columns for DataGrid
  const columns = [
    { field: 'Name', headerName: 'News Title', flex: 1, width: 200, sortable: true, },
    { field: 'Description', headerName: 'Description', width: 250, sortable: true, flex: 2 },
    { field: 'Date', headerName: 'Date', width: 150, sortable: true },
    { field: 'Status', headerName: 'Status', width: 150, sortable: true },
  ];

  return (
    <div className="m-4 p-4">
      <Header category="Page" title="News" />
      
      {/* Search and Action Buttons */}
     

      {/* News DataGrid */}
      <div style={{ width: '99%' }} >
         <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
        <TextField
          label="Search News"
          variant="outlined"
          margin="normal"
          className="w-full md:w-1/3"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex flex-wrap space-x-4">
          <NavLink to="/add_news">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-400 transition duration-200"
            >
              Add News
            </button>
          </NavLink>
          <button
            className="px-4 py-2 text-white rounded-md hover:bg-opacity-90 transition duration-200"
            style={{ backgroundColor: currentColor }}
            onClick={handleExportExcel}
          >
            Export to Excel
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition duration-200"
            onClick={handleExportPDF}
          >
            Export to PDF
          </button>
        </div>
      </div>
        <DataGrid
          rows={filteredNewsData.map((news, index) => ({ id: index, ...news }))}
          columns={columns}
          pageSize={10}
          checkboxSelection
          onSelectionModelChange={handleSelection}
        />
      </div>
    </div>
  );
};

export default News;
