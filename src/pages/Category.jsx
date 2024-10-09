import React from 'react'
import { NavLink } from 'react-router-dom';
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
  ContextMenu,
  Sort,
  Filter
} from '@syncfusion/ej2-react-grids';
import { categoryData,categoryGrid } from '../data/constants';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Category = () => {
  const {currentColor} = useStateContext();
  return (
     <div className='md:m-8 m-0 p-2 md:p-8 bg-white rounded-3xl'>
      <Header title="Category" category="Page" />
  
  <div className="flex justify-end mb-4" >
    <NavLink
  to="/add_category" >
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" style={{backgroundColor: currentColor}}
          
        >
          Add Category
        </button>
        </NavLink>
      </div>
      <GridComponent
       width='auto'
        dataSource={categoryData}
      allowPaging
      allowSorting
      toolbar={['Delete','Search']}
      editSettings={{allowDeleting: true, allowEditing: true}}


      
      >
        <ColumnsDirective>
        {categoryGrid.map((item,index) =>(
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page,Toolbar,Search,Edit,Selection,Sort,Filter]} />
      </GridComponent>
    </div>
  )
}

export default Category
