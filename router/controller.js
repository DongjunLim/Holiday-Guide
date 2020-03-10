const nugu = require('nugu-kit');
const nuguService = require('../nugu_service/nuguService');

const response = (nugu, output) => {
    if(!output){
        nugu.setResultCode("NOT FOUND");
        return nugu.responseException();
    }
    else{
        nugu.setOutput(output);
        return nugu.response();
    }
}


exports.countHoliday = async (req,res) => {

    const { Year, Month} = req.parameters;

    const output = Year ? nuguService.countHoliday(Year,null) : nuguService.countHoliday(null,Month);

    return response(req.nugu, output);
}

exports.findLongHoliday = async (req,res) => {

    const { Year, Month} = req.parameters;

    const output = Year? nuguService.findLongHolidayInYear(year=Year) : nuguService.findLongHolidayInMonth(month=Month);

    return response(req.nugu, output);

}

exports.findHolidayDate = async (req,res) => {
    const { holidayName} = req.parameters;

    const output = nuguService.findholidayDate(holidayName);

    return response(req.nugu, output);

}