import React, { useRef } from 'react';
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
import { customersData, customersGrid } from '../data/constants'; // Ensure this data is properly populated
import { Header } from '../components';

const Users = () => {
  // Create a reference to the GridComponent
  const gridRef = useRef(null);

  // Handle toolbar click event
  const toolbarClick = (args) => {
    if (gridRef.current) {
      const currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '-'); // Get current date in format: dd-MM-yyyy
      const fileName = `Users_Export_${currentDate}`; // Create dynamic file name

      if (args.item.id === gridRef.current.element.id + '_pdfexport') {
        gridRef.current.pdfExport({ fileName: fileName + '.pdf' }); // Export PDF with custom file name
      } else if (args.item.id === gridRef.current.element.id + '_excelexport') {
        gridRef.current.excelExport({ fileName: fileName + '.xlsx' }); // Export Excel with custom file name
      }
    }
  };

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white'>
      <Header title="Users" category="Page" />

      <GridComponent
        ref={gridRef} // Attach gridRef here
        width='auto'
        dataSource={customersData} // Ensure customersData is populated
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={['PdfExport', 'ExcelExport', 'Delete', 'Search']} // Add PdfExport and ExcelExport buttons
        editSettings={{ allowDeleting: true, allowEditing: true }}
        toolbarClick={toolbarClick} // Handle export clicks
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Search, Edit, Selection, Sort, Filter, PdfExport, ExcelExport]} />
      </GridComponent>
    </div>
  );
};

export default Users;
