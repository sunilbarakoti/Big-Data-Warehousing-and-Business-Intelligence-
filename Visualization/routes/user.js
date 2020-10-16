const path = require('path');

const express = require('express');

const shopController = require('../controllers/user');

const router = express.Router();

router.get('/', shopController.getUsersbyYear);

router.get('/getusers', shopController.getUsersbyYear);
router.post('/getusersbymonths', shopController.getUsersbyMonth);
router.post('/getusersbydays', shopController.getUsersbyDay);
router.post('/getusersbyhours', shopController.getUsersbyHour);

module.exports = router;
