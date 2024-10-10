import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { HtmlEditor,Image, Inject, Link, QuickToolbar, RichTextEditorComponent,Toolbar
} from '@syncfusion/ej2-react-richtexteditor';

const AddNews = () => {
  const [newsTitle, setNewsTitle] = useState('');
  const [newsDescription, setNewsDescription] = useState('');
  const [addedDate, setAddedDate] = useState('');
  const [newsImage, setNewsImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
  const { currentColor } = useStateContext();

  const categories = ['Technology', 'Health', 'Finance', 'Education', 'Entertainment']; // Example categories

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      newsTitle,
      newsDescription,
      addedDate,
      newsImage,
      selectedCategory
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="dark:bg-gray-800 dark:text-white bg-slate-400 rounded-lg shadow-lg p-6 w-1/2"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add News</h2>

        <div className="mb-4">
          <label htmlFor="newsTitle" className="block mb-2">News Title</label>
          <input
            type="text"
            id="newsTitle"
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
            className="w-full p-2 rounded dark:bg-gray-700 border dark:border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Select Category */}
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">Select Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 rounded dark:bg-gray-700 border dark:border-gray-600 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select a category</option> {/* Placeholder option */}
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
 <div className="mb-4">
          <label htmlFor="newsDescription" className="block mb-2">
            News Description
          </label>
          <RichTextEditorComponent
            value={newsDescription} 
            change={(e) => setNewsDescription(e.value)} // Update state on change
            className="dark:bg-gray-700 dark:text-white border dark:border-gray-600" 
         
          >
            <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
          </RichTextEditorComponent>
        </div>
        

        <div className="mb-4">
          <label htmlFor="addedDate" className="block mb-2">Added Date</label>
          <input
            type="date"
            id="addedDate"
            value={addedDate}
            onChange={(e) => setAddedDate(e.target.value)}
            className="w-full p-2 rounded dark:bg-gray-700 border dark:border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="newsImage" className="block mb-2">News Image</label>
          <input
            type="file"
            id="newsImage"
            accept="image/*"
            onChange={(e) => setNewsImage(e.target.files[0])}
            className="w-full p-2 rounded dark:bg-gray-700 border dark:border-gray-600 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: currentColor }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
        >
          Add News
        </button>
      </form>
    </div>
  );
};

export default AddNews;
