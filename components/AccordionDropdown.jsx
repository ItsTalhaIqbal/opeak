"use client"
import React, { useState } from 'react';
import { VscTriangleDown } from 'react-icons/vsc';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    { title: 'High Performance', content: 'Details about high performance features and benefits.' },
    { title: 'Speed and Range', content: 'Information on speed capabilities and range.' },
    { title: 'Modes of Operation', content: 'Overview of different operational modes available.' },
    { title: 'Comfort and Convenience', content: 'Insights into comfort and convenience features.' }
  ];

  return (
    <div className="w-full h-auto mb-5">
      {sections.map((section, index) => (
        <div key={index} className="w-full sm:w-[95%] ml-auto mr-auto mb-2 order-div">
          <div
            className="h-[30px] flex items-center cursor-pointer justify-between"
            onClick={() => handleToggle(index)}
          >
            <h5 className="flex items-center">
              {section.title}
              
            </h5>
            <VscTriangleDown
                className={`ml-2 transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}
                size={20}
              />
          </div>
          {activeIndex === index && (
            <div className="p-3 border-t border-gray-300">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
