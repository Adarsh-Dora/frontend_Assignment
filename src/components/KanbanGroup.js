import React from 'react';
import Ticket from './Ticket';
import StatusIcon from './StatusIcon';
import './KanbanGroup.css';
import add from "../assets/add.svg";
import dotmenu from "../assets/3 dot menu.svg";

// Function to map priority numbers to labels
const getPriorityLabel = (priority) => {
  switch (priority) {
    case 0:
      return 'No Priority';
    case 1:
      return 'Low';
    case 2:
      return 'Medium';
    case 3:
      return 'High';
    case 4:
      return 'Urgent';
    default:
      return 'Unknown';
  }
};

const KanbanGroup = ({ groupKey, tickets, groupBy, sortBy }) => {
  let groupTitle = groupKey;

  // Update the group title based on groupBy type
  if (groupBy === 'priority') {
    groupTitle = getPriorityLabel(parseInt(groupKey)); // Convert groupKey to priority label if grouped by priority
  }

  // Sorting tickets based on the sortBy prop passed from App.js
  const sortedTickets = [...tickets].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title); // Sort alphabetically by title
    } else if (sortBy === 'priority') {
      return a.priority - b.priority; // Sort by priority (ascending)
    } else if (sortBy === 'user') {
      return a.user.name.localeCompare(b.user.name); // Sort alphabetically by user name
    }
    return 0; // Default no sorting
  });

  return (
    <div className="kanban-group">
      <div className="kanban-group-header">
        <div className="left-group">
          {/* Display avatar next to the group title if grouped by user */}
          {groupBy === 'user' && (
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(groupKey)}&background=random&size=32`}
              alt="User Avatar"
              className="user-avatar-group"
            />
          )}
          <span className="status-icon-wrapper">
          <StatusIcon status={groupKey} priority={groupTitle} />
          </span>
          <span className="group-title">
            {groupTitle} <span className="ticket-count">({tickets.length})</span>
          </span>
        </div>
        <div className="right-group">
          {/* Add and options icons */}
          <span className="icon-wrapper"> 
            <img src={add} alt="Add Icon" width="18" height="18" />
          </span>
          <span className="icon-wrapper"> 
            <img src={dotmenu} alt="Menu Icon" width="18" height="18" />
          </span>
        </div>
      </div>
      <ul className="ticket-list">
        {sortedTickets.map((ticket) => (
          <Ticket 
            key={ticket.id} 
            ticket={{ 
              ...ticket, 
              priorityLabel: getPriorityLabel(ticket.priority) // Pass priority label to Ticket component
            }} 
            showAvatar={groupBy !== 'user'} // Pass true or false based on groupBy
            groupBy={groupBy}
          />
        ))}
      </ul>
    </div>
  );
};

export default KanbanGroup ;