import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bracket = ({ user, setUser }) => {
  const [teams, setTeams] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('/teams');
        setTeams(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTeams();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/users/${user._id}`, { teams: selectedTeams });
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTeamSelect = (e) => {
    const teamId = e.target.value;
    const isSelected = e.target.checked;
    if (isSelected) {
      setSelectedTeams([...selectedTeams, teamId]);
    } else {
      setSelectedTeams(selectedTeams.filter(id => id !== teamId));
    }
  };

  return (
    <div>
      <h2>Bracket</h2>
      <form onSubmit={handleSubmit}>
        {teams.map(team => (
          <div key={team._id}>
            <label>
              <input type="checkbox" value={team._id} onChange={handleTeamSelect} />
              {team.name}
            </label>
          </div>
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Bracket;
