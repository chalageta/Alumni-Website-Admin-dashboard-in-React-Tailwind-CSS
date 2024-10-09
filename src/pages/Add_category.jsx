import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';
const Add_category = () => {
    const {currentColor} = useStateContext();
  const [categoryName, setCategoryName] = useState('');

  return (
    
    <div className='dark:bg-gray-900 dark:text-white bg-white text-gray-900 min-h-screen flex items-center justify-center'>
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
   <h1 className="text-2xl font-semibold mb-6 text-center">Add New Category</h1>
        <form onSubmit={()=>{}}>
          <div className="mb-6">
            <label htmlFor="categoryName" className="block text-lg font-medium mb-2">
              Category Name
            </label>
            <input
              type="text"
              id="categoryName"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="Enter category name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600" style={{backgroundColor:currentColor}}
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_category;
