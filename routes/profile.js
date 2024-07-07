const express = require('express');

const router = express.Router();

const profileController = require('../controllers/profile');
const userAuthentication = require('../middleware/auth');

router.post('/profile/createprofile', userAuthentication.authenticate, profileController.createProfile);

router.get('/profile/getprofile', userAuthentication.authenticate, profileController.getprofile);

module.exports = router;