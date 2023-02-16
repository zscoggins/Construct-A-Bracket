import React from 'react';
import Bracket from '../components/Bracket';
import Forum from '../components/Forum';

const Dashboard = ({ user, setUser }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Bracket user={user} setUser={setUser} />
      <Forum />
    </div>
  );
};

export default Dashboard;
