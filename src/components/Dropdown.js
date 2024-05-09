import React, { useState } from 'react';

const Dropdown = ({dummyActivities, setNotificationType}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div
        className="w-44 border border-gray-300 rounded-t-lg p-2 cursor-pointer"
        onClick={toggleDropdown}
      >
        Notification Type
      </div>
      {isOpen && (
        <div className="absolute z-10 w-44 bg-white border border-gray-300 rounded-b-md overflow-y-auto max-h-48">
          {dummyActivities.map((option, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-green-100"
              onClick={() => setNotificationType(option.type)} 
            >
              {option.type}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
