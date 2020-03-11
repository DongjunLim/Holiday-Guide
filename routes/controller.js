const nugu = require('nugu-kit');
const nuguService = require('../nugu/nuguService');


exports.countHoliday = async (req,res) => {

    const Year = req.nugu.getValue('Year');
    const Month = req.nugu.getValue('Month');

    const output = Year ? await nuguService.countHoliday(Year,null) : await nuguService.countHoliday(null,Month);
    
    (output) ? req.nugu.output = output : req.nugu.resultCode = 'NOT FOUND';

    return res.json(req.nugu.response);
    
}

exports.findLongHoliday = async (req,res) => {

    const Year = req.nugu.getValue('Year');

    const output = await nuguService.findLongHolidayInYear(Year);

    (output) ? req.nugu.output = output : req.nugu.resultCode = 'NOT FOUND';

    return res.json(req.nugu.response);
}

exports.findHolidayDate = async (req,res) => {
    
    const holidayName = req.nugu.getValue('holidayName');

    const output = await nuguService.findholidayDate(holidayName);
    
    (output) ? req.nugu.output = output : req.nugu.resultCode = 'NOT FOUND';

    return res.json(req.nugu.response);
}
