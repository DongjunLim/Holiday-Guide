const express = require('express');
const router = express.Router();
const controller = require('./controller');


router.post('/answer.slotFilling_YearMonth', controller.countHoliday);

router.post('/Ask.longHoliday', controller.findLongHoliday);

router.post('/answer.WhenHoliday', controller.findHolidayDate);


module.exports = router;
