const express = require('express');
const router = express.Router();
const getAllData = require('../Controllers/getController')


router.get('/getAll', getAllData.getAllData);
router.get('/getDataById/:id', getAllData.getDataById)
router.post('/postData', getAllData.postData)

module.exports = router;