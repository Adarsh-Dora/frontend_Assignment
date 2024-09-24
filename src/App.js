import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import GroupingMenu from './components/GroupingMenu';  // Import the GroupingMenu component
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    // Fetch the API data with both tickets and users
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => {
        // Assuming the response data has tickets and users properties
        const { tickets, users } = response.data;
        setTickets(tickets);  // Set the tickets data
        setUsers(users);      // Set the users data
      })
      .catch((error) => console.error('Error fetching tickets and users:', error));
  }, []);

  return (
    <div className="App">
    
  <div className="navbar">
  <GroupingMenu 
        groupBy={groupBy} 
        setGroupBy={setGroupBy} 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
      />
  </div>

      {/* Kanban Board */}
      <KanbanBoard tickets={tickets} users={users} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
