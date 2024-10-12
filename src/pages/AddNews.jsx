import React, { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { MdCloudUpload } from 'react-icons/md';

const AddNews = () => {
  const [newsTitle, setNewsTitle] = useState('');
  const [newsDescription, setNewsDescription] = useState('');
  const [addedDate, setAddedDate] = useState('');
  const [newsImages, setNewsImages] = useState([]); // Array to store multiple images
  const [selectedCategory, setSelectedCategory] = useState('');
  const { currentColor, currentMode } = useStateContext(); // Get dark mode state
  const categories = ['Technology', 'Health', 'Finance', 'Education', 'Entertainment'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      newsTitle,
      newsDescription,
      addedDate,
      newsImages, // Log the array of images
      selectedCategory
    });
  };

  // Handle the file drop or click for the drop zone
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files); // Get all dropped files
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length > 0) {
      setNewsImages(prevImages => [...prevImages, ...imageFiles]); // Add to existing images
    }
  };

  // Handle click to upload file
  const handleClick = () => {
    document.getElementById('hiddenFileInput').click();
  };

  // Handle file selection via the file picker
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    if (imageFiles.length > 0) {
      setNewsImages(prevImages => [...prevImages, ...imageFiles]); // Add to existing images
    }
  };

  // Function to remove an image
  const removeImage = (index) => {
    setNewsImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 p-4">
      <form
        onSubmit={handleSubmit}
        className="dark:bg-gray-800 dark:text-white bg-slate-400 rounded-lg shadow-lg p-6 w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Add News</h2>

        <div className="mb-4">
          <label htmlFor="newsTitle" className="block mb-2">News Title</label>
          <input
            type="text"
            id="newsTitle"
            value={newsTitle}
            onChange={(e) => setNewsTitle(e.target.value)}
            className="w-full p-2 rounded dark:bg-gray-700 dark:text-white border dark:border-gray-600 focus:outline-none focus:border-blue-500"
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
            className="w-full p-2 rounded dark:bg-gray-700 dark:text-white border dark:border-gray-600 focus:outline-none focus:border-blue-500"
            required
          >
            <option value="" disabled>Select a category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* News Description */}
        <div className="mb-4">
          <label htmlFor="newsDescription" className="block mb-2">News Description</label>
          <div className={`richtext-editor ${currentMode === 'Dark' ? 'e-dark' : ''}`}>
            <RichTextEditorComponent
              value={newsDescription}
              change={(e) => setNewsDescription(e.value)}
              className="dark:bg-gray-700 dark:text-white border dark:border-gray-600"
              pasteCleanup={{ allowedTags: null }}
            >
              <Inject services={[HtmlEditor, Image, Link, QuickToolbar, Toolbar]} />
            </RichTextEditorComponent>
          </div>
        </div>

        {/* Upload Multiple Images or Drag-and-Drop */}
        <div className="mb-4">
          <label htmlFor="newsImages" className="block mb-2">Upload Images (Multiple), Drop Files, Paste Image or URL</label>
          <div
            className="border-dashed border-2 border-gray-300 dark:border-gray-600 p-4 mb-2 rounded text-center dark:bg-gray-700 cursor-pointer"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={handleClick}
          >
            {newsImages.length > 0 ? (
              <div>
                {newsImages.map((image, index) => (
                  <div key={index} className="flex justify-between items-center mb-2">
                    <p>{image.name}</p>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => removeImage(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            ) : (
                 
              <p>Drag and drop images here or click to upload</p>
            )}
          </div>

          {/* Hidden File Input */}
          <input
            type="file"
            id="hiddenFileInput"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            style={{ backgroundColor: currentColor }}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
          >
            Add News
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNews;
