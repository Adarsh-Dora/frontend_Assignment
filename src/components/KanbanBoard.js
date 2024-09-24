import React from 'react';
import KanbanGroup from './KanbanGroup';
import './KanbanBoard.css';

const KanbanBoard = ({ tickets, users, groupBy ,sortBy}) => {
  // Group tickets based on groupBy
 
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const user = users.find((user) => user.id === ticket.userId);
    const key = groupBy === 'status' ? ticket.status : groupBy === 'user' ? user.name : ticket.priority;

    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push({ ...ticket, user });
    return acc;
  }, {});
console.log(groupedTickets) ;
if(groupBy==='status'){
  groupedTickets.Done = [];
groupedTickets.Cancelled = [] ;
}

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((groupKey) => (
       
        <KanbanGroup key={groupKey} groupKey={groupKey} tickets={groupedTickets[groupKey]} groupBy={groupBy} sortBy={sortBy} />

      ))}
    </div>
  );
};

export default KanbanBoard;
