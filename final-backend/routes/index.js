const express = require('express');
const router = express.Router();

// Subrouters;
const tasksRouter = require('./task');
const employeesRouter = require('./employee');

// Mount our subrouters to assemble our apiRouter;
router.use('/tasks', tasksRouter);
router.use('/employees', employeesRouter);

// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;