import React from 'react';
import './Ticket.css';
import noPriority from "../assets/No-priority.svg";
import lowPriority from "../assets/Img - Low Priority.svg";
import highPriority from "../assets/Img - High Priority.svg";
import mediumPriority from "../assets/Img - Medium Priority.svg";
import urgent from "../assets/SVG - Urgent Priority grey.svg";
import feature from "../assets/To-do.svg";
import StatusIcon from './StatusIcon'; // Import StatusIcon

const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return noPriority;
    case 1:
      return lowPriority;
    case 2:
      return mediumPriority;
    case 3:
      return highPriority;
    case 4:
      return urgent;
    default:
      return null; // Handle unknown priority case
  }
};

const Ticket = ({ ticket, showAvatar, groupBy }) => {
  return (
    <li className="ticket-box">
      <div className="ticket-content">
        <div className="ticket-header">
          <p>{ticket.id}</p>
          {showAvatar && (
            <img
              src={`https://ui-avatars.com/api/?name=${encodeURIComponent(ticket.user.name)}&background=random&size=128`}
              alt="User Avatar"
              className="user-avatar"
            />
          )}
        </div>
        <p>
          <span style={{ display: 'flex', alignItems: 'flex-start' }}>
            {groupBy === 'priority' || groupBy === 'user' ? (
              // When grouped by priority or user, render the status icon and title
              <>
                <span style={{ marginRight: '8px' }}>
                  <StatusIcon status={ticket.status} />
                </span>
                <span>{ticket.title}</span>
              </>
            ) : (
              // Render only the title when not grouped by priority or user
              <span>{ticket.title}</span>
            )}
          </span>
        </p>

        {ticket.tag && ticket.tag.length > 0 && (
          <p className="ticket-tag">
            {groupBy !== 'priority' && (
              <span className="priority-icon">
                <img src={getPriorityIcon(ticket.priority)} alt="Priority Icon" width="12" height="12" />
              </span>
            )}
            <span className='feature'>
              <img src={feature} alt="Feature Icon" width="14" height="14" />
            </span>
            {ticket.tag}
          </p>
        )}
      </div>
    </li>
  );
};

export default Ticket;
