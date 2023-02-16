const Team = require('../models/teamModel');
const User = require('../models/userModel');

const createTeam = async (req, res) => {
  try {
    const { name } = req.body;
    const team = new Team({ name });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const selectTeam = async (req, res) => {
  try {
    const { teamId } = req.body;
    const user = await User.findById(req.user.id);
    user.team = teamId;
    await user.save();
    res.json({ message: 'Team selected successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { createTeam, selectTeam };