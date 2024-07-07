const express = require('express');

const router = express.Router();

const jobController = require('../controllers/job');
const userAuthentication = require('../middleware/auth');

router.post('/job/addjob', jobController.postjob);

router.get('/job/searchjob/:search', jobController.searchjob);

router.post('/job/apply', userAuthentication.authenticate, jobController.applyjob);

router.get('/job/applylist', userAuthentication.authenticate, jobController.joblist);

module.exports = router;