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

const Events = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10'>
      <Header title="Events" category="Page" />

      <GridComponent id='gridComp' dataSource={ordersData}
      allowPaging>
        <ColumnsDirective>
        {ordersGrid.map((item,index) =>(
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Resize,ContextMenu,Filter,Page,Sort,ExcelExport,PdfExport,Edit]} />
      </GridComponent>
    </div>
  )
}

export default Events
