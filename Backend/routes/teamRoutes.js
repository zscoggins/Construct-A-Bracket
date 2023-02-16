const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// routes
router.post('/', teamController.createTeam);

module.exports = router;
