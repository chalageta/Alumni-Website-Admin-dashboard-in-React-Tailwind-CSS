import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import { FaEyeSlash } from 'react-icons/fa'; 
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Edit,
  Toolbar,
  Inject,
  Selection,
  PdfExport,
  ExcelExport,
  Sort,
  Filter
} from '@syncfusion/ej2-react-grids';
import { newsData, newsGrid } from '../data/constants';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import './Users.css'; // Import your CSS file

const News = () => {
  const { currentColor } = useStateContext();
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default to 10 items per page
  const handlePageSizeChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  // Hide/Display handler (for example purposes, you can implement actual logic)
  const toggleVisibility = (id) => {
    console.log(`Toggling visibility for news item with ID: ${id}`);
  };

  // Edit handler (for example purposes)
  const handleEdit = (id) => {
    console.log(`Editing news item with ID: ${id}`);
  };

  // Delete handler (for example purposes)
  const handleDelete = (id) => {
    console.log(`Deleting news item with ID: ${id}`);
  };

  
  return (
    <div className="m-1 md:m-10 p-2 md:p-10 bg-white">
      <Header title="News" category="Page" />
      <div className="flex justify-end mb-2">
        <NavLink to="/add_news">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            style={{ backgroundColor: currentColor }}
          >
            Add News
          </button>
        </NavLink>
      </div>
      <div className="mb-4">
        <select
          id="pageSize"
          value={itemsPerPage}
          onChange={handlePageSizeChange}
          className="custom-select"
        >
          <option value="" disabled>
            Per Page
          </option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <GridComponent
        width="auto"
        dataSource={newsData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={['Delete', 'Search']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        pageSettings={{ pageSize: itemsPerPage }}
      >
        <ColumnsDirective>
          {newsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
          
        </ColumnsDirective>
        <Inject
          services={[
            Page,
            Toolbar,
            Search,
            Edit,
            Selection,
            Sort,
            Filter,
            PdfExport,
            ExcelExport
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default News;
