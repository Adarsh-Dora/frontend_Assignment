import React, { useState } from 'react';
import display from "../assets/Display.svg";
import dropDown from "../assets/down.svg";

const GroupingMenu = ({ groupBy, setGroupBy, sortBy, setSortBy }) => {
  const [showMenu, setShowMenu] = useState(false); // State to manage dropdown visibility

  return (
    <div className="controls">
      <button
        style={{
          cursor: 'pointer',
          display: 'flex', // Use flexbox for alignment
          alignItems: 'center', // Center items vertically
          marginBottom: '8px',
          fontSize: '16px', // Adjust font size to match SVG size
        }} 
        onClick={() => setShowMenu(!showMenu)}
      >
        <img src={display} alt="display svg" style={{ marginRight: '8px' }} /> {/* Add margin for gap */}
        Display {/* This acts as the clickable label */}
        <img src={dropDown} alt="dropDown svg" style={{ marginLeft: '8px' }} /> {/* Add margin for gap */}
      </button>
      
      {showMenu && ( // Conditional rendering for "Group by" and "Sort by"
       <div style={{position:'absolute',top : "40px",left:"30px",backgroundColor: 'white',padding:"20px"}}>
         <div style={{ marginTop: '8px' }}>
          <div>
            <label>Grouping:</label>
            <select onChange={(e) => setGroupBy(e.target.value)} value={groupBy}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          <div style={{ marginTop: '8px' }}>
            <label>Ordering:</label>
            <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
       </div>
      )}
    </div>
  );
};

export default GroupingMenu;
