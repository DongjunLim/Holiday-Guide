'use strict'
const query = require('../db/query');

const nuguService = {
    countHoliday: async (year=null,month=null) => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth()+1;
        let num;

        switch(year){
            case 'BID_DT_YEAR':
                num = await query.countHolidayInYear(thisYear);
                break;
            case 'BID_DT_YEAR.-1':
                num = await query.countHolidayInYear(thisYear-1);
                break;
            case 'BID_DT_YEAR.-2':
                num = await query.countHolidayInYear(thisYear-2);
                break;
            case 'BID_DT_YEAR.-3':
                num = await query.countHolidayInYear(thisYear-3);
                break;
            case 'BID_DT_YEAR.1':
                num = await query.countHolidayInYear(thisYear+1);
                break;
            case 'BID_DT_YEAR.2':
                num = await query.countHolidayInYear(thisYear+2);
                break; 
        }

        switch(month){
            case 'BID_DT_MONTH':
                num = await query.countHolidayInMonth(thisYear, thisMonth);
                break;
            case 'BID_DT_MONTH.M.-1':
                num = await query.countHolidayInMonth(thisYear, thisMonth-1);
                break;
            case 'BID_DT_MONTH.M.-2':
                num = await query.countHolidayInMonth(thisYear, thisMonth-2);
                break;
            case 'BID_DT_MONTH.M.1':
                num = await query.countHolidayInMonth(thisYear, thisMonth+1);
                break;
            case 'BID_DT_MONTH.M.2':
                num = await query.countHolidayInMonth(thisYear,thisMonth+2);
                break;
                    
        }

        await console.log(num);
        return num;
    },

    countHolidayInMonth: (month) => {
        const today = new Date();


    },
    
    findLongHolidayInYear: ( year) => {

    },

    findLongHolidayInMonth: (month)=> {

    },

    findholidayDate: (holidayName) => {

    },
}
nuguService.countHoliday('BID_DT_YEAR', null);

module.exports = nuguService;