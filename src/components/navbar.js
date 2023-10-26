import React, { useState } from 'react';
import Dropdown from './dropdown';
// import '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function UserProfile({ name, image }) {
    return (
      <div className="flex items-center">
        <img src={image} alt="Profile Picture" className="w-12 h-12 rounded-full mr-2" />
        <span className=" text-lg font-semibold">{name}</span>
      </div>
    );
  }
  
  

  return (
    <nav className="bg-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
          <UserProfile name="Dizzy" image="avatar.jpg" />
        </div>
       
       
        <div className="relative group">
          <button
            className="text-white focus:outline-none group-hover:text-gray-300"
            onClick={toggleDropdown}
          >
            <div className="flex items-center">
            <span className="text-xl text-gray-400 mr-2">
                {/* Notification icon (you can use an icon library or an SVG here) */}
                <FontAwesomeIcon icon={faBell} style={{color: "#bcb9b9",}} />
              </span>
              <img
                src="avatar.jpg"
                alt="Profile Picture"
                className="w-12 h-12 rounded-full mr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current text-gray-400 transform duration-300 group-hover:rotate-180"
                viewBox="0 0 20 20"
              >
                <path d="M10 12l-5-5 1.5-1.5L10 9.793 13.5 6.5 15 8z" />
              </svg>
            </div>
          </button>
          {isDropdownOpen && <Dropdown />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
