import React from 'react';

const TicketCard = ({ ticket }) => {
  const priorityLabels = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.assigned_user}</p>
      <p>Priority: {priorityLabels[ticket.priority]}</p>
    </div>
  );
}

export default TicketCard;
