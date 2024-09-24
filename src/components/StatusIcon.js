import React from 'react';
import TodoIcon from '../assets/To-do.svg';
import InProgressIcon from '../assets/in-progress.svg';
import BacklogIcon from '../assets/Backlog.svg';
import NoPriorityIcon from '../assets/No-priority.svg'; // Import your priority SVGs
import LowPriorityIcon from '../assets/Img - Low Priority.svg';
import MediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import HighPriorityIcon from '../assets/Img - High Priority.svg';
import UrgentPriorityIcon from '../assets/SVG - Urgent Priority colour.svg';
import DoneIcon from  "../assets/Done.svg"
import CancelledIcon from "../assets/Cancelled.svg"

const StatusIcon = ({ status, priority }) => {
  let icon;

  switch (status) {
    case 'Todo':
      icon = <img src={TodoIcon} alt="Todo Icon" width="18" height="18" />;
      break;
    case 'In progress':
      icon = <img src={InProgressIcon} alt="In Progress Icon" width="18" height="18" />;
      break;
    case 'Backlog':
      icon = <img src={BacklogIcon} alt="Backlog Icon" width="18" height="18" />;
      break;
      case 'Done':
        icon = <img src={DoneIcon} alt="Backlog Icon" width="18" height="18" />;
        break;
        case 'Cancelled':
          icon = <img src={CancelledIcon} alt="Backlog Icon" width="18" height="18" />;
          break;
    default:
      icon = null;
  }

  // Add priority icons based on the priority prop
  let priorityIcon;
  switch (priority) {
    case 'No Priority':
      priorityIcon = <img src={NoPriorityIcon} alt="No Priority Icon" width="12" height="12" />;
      break;
    case 'Low':
      priorityIcon = <img src={LowPriorityIcon} alt="Low Priority Icon" width="12" height="12" />;
      break;
    case 'Medium':
      priorityIcon = <img src={MediumPriorityIcon} alt="Medium Priority Icon" width="12" height="12" />;
      break;
    case 'High':
      priorityIcon = <img src={HighPriorityIcon} alt="High Priority Icon" width="12" height="12" />;
      break;
      case 'Urgent':
        priorityIcon = <img src={UrgentPriorityIcon} alt="High Priority Icon" width="12" height="12" />;
        break;
  
    default:
      priorityIcon = null;
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {icon}
      {priorityIcon && <div style={{ marginLeft: '4px' }}>{priorityIcon}</div>}
    </div>
  );
};

export default StatusIcon;
