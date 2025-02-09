import React from 'react';
import TicketCard from './TicketCard';

const Column = ({ title, tickets }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      {tickets.map(ticket => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
