import { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { PagerComponent } from "@syncfusion/ej2-react-grids";
import { FiEdit, FiTrash2 } from 'react-icons/fi'; 
import { MdCloudUpload } from 'react-icons/md';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ImageGallery = () => {
  const { currentColor } = useStateContext();
  const [images, setImages] = useState([
    {
      title: 'Irreechaa Festival',
      src: [
        'https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/462166810_850079990647971_5239676167936850587_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sL8bx1hK7S4Q7kNvgHkmYDG&_nc_ht=scontent.fadd1-1.fna&_nc_gid=AGyfVjoqemrNqGMs4mPUsT8&oh=00_AYAkN3-gDMKSPrxeIMl_5MQJFViyeGpp3Z0PoGYPWstWrQ&oe=670D34FA',
      ],
    },
    {
      title: 'IT Teams',
      src: [
        'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/7988218/pexels-photo-7988218.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
    },
    {
      title: 'Tax Payers',
      src: [
        'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
    {
      title: 'ECC Employees',
      src: [
        'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
    {
      title: 'Family Day',
      src: [
        'https://images.pexels.com/photos/14612128/pexels-photo-14612128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      ],
    },
  ]);

  const [imageTitle, setImageTitle] = useState('');
  const [imageFiles, setImageFiles] = useState([]);
  const [uploadedFileNames, setUploadedFileNames] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(3);
  const [selectedImages, setSelectedImages] = useState([]); // State for the modal images
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // New state to track the current image index

  const handleSubmit = (e) => {
    e.preventDefault();

    const newImages = imageFiles.map(file => ({
      title: imageTitle || file.name,
      src: [URL.createObjectURL(file)], // Wrap in an array
    }));

    setImages([...images, ...newImages]);
    setImageTitle('');
    setUploadedFileNames([]);
    setImageFiles([]);
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleEdit = (index) => {
    const imageToEdit = images[index];
    setImageTitle(imageToEdit.title);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const handlePageChange = (e) => {
    setCurrentPage(e.currentPage);
  };

  const handleUploadClick = () => {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length) {
      setImageFiles(files);
      setUploadedFileNames(files.map(file => file.name));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    if (files.length) {
      setImageFiles(files);
      setUploadedFileNames(files.map(file => file.name));
    }
  };

  const openModal = (src, index) => {
    setSelectedImages(src);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={'min-h-screen p-6 dark:bg-gray-900 dark:text-white bg-gray-100 text-black'}>
      <h1 className="text-3xl font-bold text-center mb-6">ECC Image Gallery</h1>

      <div className="mb-8 flex justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by image title"
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white bg-white"
        />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        {currentImages.map((image, index) => (
          <div key={index} className='shadow-md rounded-lg overflow-hidden dark:bg-gray-800 bg-white'>
            <img
              src={image.src[0]}
              alt={image.title}
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => openModal(image.src, 0)} // Pass 0 as the index to open the first image in the modal
            />
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">{image.title}</h2>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(index)} className="text-blue-500 hover:text-blue-700">
                  <FiEdit />
                </button>
                <button onClick={() => handleDelete(index)} className="text-red-500 hover:text-red-700">
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <PagerComponent
        totalRecordsCount={filteredImages.length}
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

        <div className="mb-4 flex items-center">
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className='hidden'
          />
          <button
            type="button"
            onClick={handleUploadClick}
            className={`flex items-center justify-center px-4 py-2 rounded-md bg-${currentColor}-500 hover:bg-${currentColor}-600 text-white transition duration-150`}
          >
            <MdCloudUpload className="mr-2" />
            Upload Image(s)
          </button>
          <span className='ml-2'>{uploadedFileNames.join(', ')}</span>
        </div>

        <button
          type="submit"
          className={`flex items-center justify-center px-4 py-2 rounded-md bg-${currentColor}-500 hover:bg-${currentColor}-600 text-white transition duration-150`}
        >
          Add Image
        </button>
      </form>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white rounded-lg p-4 relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">X</button>
            <img src={selectedImages[currentImageIndex]} alt="" className="w-full h-96 object-cover" />
            <div className="flex justify-between mt-4">
              <button onClick={handlePrev} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                <FiChevronLeft />
              </button>
              <button onClick={handleNext} className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
