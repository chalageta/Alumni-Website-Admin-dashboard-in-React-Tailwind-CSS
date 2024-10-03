import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Edit,
  Toolbar,
  Inject,
  ContextMenu
} from '@syncfusion/ej2-react-grids';
import { employeesData,employeesGrid } from '../data/constants';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10'>
      <Header title="Employees" category="Page" />

      <GridComponent
       width='auto'
        dataSource={employeesData}
      allowPaging
      allowSorting
      toolbar={['Search']}
      
      >
        <ColumnsDirective>
        {employeesGrid.map((item,index) =>(
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees