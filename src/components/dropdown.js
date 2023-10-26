import React from 'react';

function Dropdown() {
  return (
    <div className="absolute top-14 right-4 bg-white border border-gray-300 p-2 rounded-lg shadow-md">
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </div>
  );
}

export default Dropdown;
