const express =require("express");
const router = express.Router();

const adminController = require('../controller/adminController');


router.get('/list',adminController.list);

module.exports = router;