import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { PagerComponent } from "@syncfusion/ej2-react-grids";

const ImageGallery = () => {
  const { currentColor } = useStateContext();
  const [images, setImages] = useState([
    {
      title: 'Sunset',
      src: 'https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'IT Teams',
      src: 'https://images.pexels.com/photos/7988218/pexels-photo-7988218.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Tax Payers',
      src: 'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'ECC Employees',
      src: 'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Family Day',
      src: 'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    // Add more images here if needed
  ]);

  const [imageTitle, setImageTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // Search term for filtering images
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const [imagesPerPage] = useState(3); // Images per page

  const handleSubmit = (e) => {
    e.preventDefault();

    const imageUrl = URL.createObjectURL(imageFile);
    setImages([...images, { title: imageTitle, src: imageUrl }]);

    setImageTitle('');
    setImageFile(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle the dark mode state
  };

  // Filter images by search term
  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const handlePageChange = (e) => {
    setCurrentPage(e.currentPage);
  };

  return (
    <div className={'min-h-screen p-6 dark:bg-gray-900 dark:text-white bg-gray-100 text-black'}>
      <h1 className="text-3xl font-bold text-center mb-6">ECC Image Gallery</h1>

      {/* Search bar */}
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by image title"
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 text-white bg-white"
        />
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {currentImages.map((image, index) => (
          <div key={index} className='shadow-md rounded-lg overflow-hidden dark:bg-gray-800 bg-white'>
            <img src={image.src} alt={image.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{image.title}</h2>
            </div>
          </div>
        ))}
      </div>

<PagerComponent
  totalRecordsCount={filteredImages.length} // Pagination based on filtered images
  pageSize={imagesPerPage}
  currentPage={currentPage}
  click={handlePageChange}
  
  className='mb-6'
/>


      <form className='shadow-md rounded-lg p-6 dark:bg-gray-800 bg-white' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Image Title</label>
          <input
            type="text"
            value={imageTitle}
            onChange={(e) => setImageTitle(e.target.value)}
            placeholder="Enter image title"
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white bg-white'
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Choose Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white bg-white'
            required
          />
        </div>

        <button
          type="submit"
          className='w-full text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-700 bg-blue-500'
          style={{ backgroundColor: currentColor }}
        >
          Add Image
        </button>
      </form>
    </div>
  );
};

export default ImageGallery;
