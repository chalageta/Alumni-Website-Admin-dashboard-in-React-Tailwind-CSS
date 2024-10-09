import React from 'react'
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  ExcelExport,
  PdfExport,
  Sort,
  Filter,
  Resize,
  Toolbar,
  Edit,
  Inject,
  ContextMenu
} from '@syncfusion/ej2-react-grids';
import { ordersData,contextMenuItems,ordersGrid } from '../data/constants';
import { Header } from '../components';
import './Users.css'

const Events = () => {
  return (
    <div className='md:m-8 m-0 p-2 md:p-8 bg-white rounded-3xl'>
      <Header title="Events" category="Page" />

      <GridComponent id='gridComp' dataSource={ordersData}
      allowPaging
      allowSorting
      toolbar={['Search']}>
        <ColumnsDirective>
        {ordersGrid.map((item,index) =>(
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize,ContextMenu,Filter,Page,Sort,ExcelExport,PdfExport,Edit,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Events
