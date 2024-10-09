import React, { useState, useRef } from 'react';
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
import './Users.css'; // Import your CSS file

const News = () => {
  const gridRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default to 10 items per page

  const handlePageSizeChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
  };

  const toolbarClick = (args) => {
    if (gridRef.current) {
      if (args.item.id === gridRef.current.element.id + '_pdfexport') {
        gridRef.current.pdfExport();
      } else if (args.item.id === gridRef.current.element.id + '_excelexport') {
        gridRef.current.excelExport();
      }
    }
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white'>
      <Header title="News" category="Page" />

      {/* Dropdown for items per page */}
      <div className="mb-4">
         <select id="pageSize" value={itemsPerPage} onChange={handlePageSizeChange} className="custom-select">
          <option value="" disabled>per Page</option> {/* Placeholder option */}
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

      <GridComponent
        ref={gridRef}
        width='auto'
        dataSource={newsData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={['PdfExport', 'ExcelExport', 'Delete', 'Search']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbarClick={toolbarClick}
        pageSettings={{ pageSize: itemsPerPage }} // Set the page size here
      >
        <ColumnsDirective>
          {newsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Search, Edit, Selection, Sort, Filter, PdfExport, ExcelExport]} />
      </GridComponent>
    </div>
  );
};

export default News;
