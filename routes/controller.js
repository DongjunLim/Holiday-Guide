const nugu = require('nugu-kit');
const nuguService = require('../nugu/nuguService');

const response = (nugu, output) => {
    if(!output){
        nugu.setResultCode("NOT FOUND");
        return nugu.responseException();
    }
    else{
        nugu.output = output;
	console.log(nugu.output);
        return nugu.response();
    }
}


exports.countHoliday = async (req,res) => {

    const Year = req.nugu.getValue('Year');
    const Month = req.nugu.getValue('Month');

    const output = Year ? await nuguService.countHoliday(Year,null) : await nuguService.countHoliday(null,Month);
    req.nugu.output = output;
    console.log(output);
    return res.json(req.nugu.response);
    
}

exports.findLongHoliday = async (req,res) => {

    const Year = req.nugu.getValue('Year');

    const output = await nuguService.findLongHolidayInYear(Year);

    req.nugu.output = output;

    return res.json(req.nugu.response);
}

exports.findHolidayDate = async (req,res) => {
    
    const holidayName = req.nugu.getValue('holidayName');

    const output = await nuguService.findholidayDate(holidayName);
    
    req.nugu.output = output;

    return res.json(req.nugu.response);
}
