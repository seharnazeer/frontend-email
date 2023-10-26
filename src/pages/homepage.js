import React, { useState } from 'react';
import Navbar from '../components/navbar';
// import Dropdown from './dropdown';
import 'font-awesome/css/font-awesome.min.css';
import Inboxes from '../components/inboxes';

function HomePage() {

    // State to control the visibility of the dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='h-screen'>
    <Navbar image={"avatar.jpg"} name={"Dizzy"}/>
    <div className="flex items-start justify-center bg-gray-100 md:h-full h-auto ">
    <div className=" flex flex-col justify-between gap-4 md:w-3/5 w-full  mx-auto p-6  rounded-lg mt-20 ">
      {/* First Row
      <div className="flex justify-between " >
          Dropdown with icon (left corner)
         
            
          <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-white text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        jump to mailbox
        <i className={`ml-2 fas ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
      </button>
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Item 1</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Item 2</a>
            <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100">Item 3</a>
          </div>
        </div>
      )}
    </div>
          Button (right corner)
         <div> <button className="bg-green-500 text-white py-2 px-4 rounded-lg ">
            Button
          </button></div>

        </div> */}
        <Inboxes />
        
    </div>
    </div>
    </div>
  );
}

export default HomePage;
