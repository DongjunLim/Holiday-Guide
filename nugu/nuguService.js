'use strict'
const query = require('../db/query');
const convertKorFormat = require('../date/date');
const Year = require('./Year');


const nuguService = {
    countHoliday: async (year = null, month = null) => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth() + 1;
        const output = {};
        let num;

        switch (year) {
            case 'Y.0':
                num = await query.countHolidayInYear(thisYear);
                break;
            case 'Y.-1':
                num = await query.countHolidayInYear(thisYear - 1);
                break;
            case 'Y.-2':
                num = await query.countHolidayInYear(thisYear - 2);
                break;
            case 'Y.-3':
                num = await query.countHolidayInYear(thisYear - 3);
                break;
            case 'Y.1':
                num = await query.countHolidayInYear(thisYear + 1);
                break;
            case 'Y.2':
                num = await query.countHolidayInYear(thisYear + 2);
                break;
        }

        switch (month) {
            case 'M.0':
                num = await query.countHolidayInMonth(thisYear, thisMonth);
                break;
            case 'M.-1':
                num = await query.countHolidayInMonth(thisYear, thisMonth - 1);
                break;
            case 'M.-2':
                num = await query.countHolidayInMonth(thisYear, thisMonth - 2);
                break;
            case 'M.1':
                num = await query.countHolidayInMonth(thisYear, thisMonth + 1);
                break;
            case 'M.2':
                num = await query.countHolidayInMonth(thisYear, thisMonth + 2);
                break;

        }
        output['slotFilling_numHoliday'] = num;
	return output;

    },

    findLongHolidayInYear: async (year) => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const output = {};
        let longHolidays = [];
        let days;
        let responseSentence = '';

        switch (year) {
            case 'Y.0':
                days = await query.findEverydayInYear(thisYear);
                break;
            case 'Y.-1':
                days = await query.findEverydayInYear(thisYear - 1);
                break;
            case 'Y.-2':
                days = await query.findEverydayInYear(thisYear - 2);
                break;
            case 'Y.-3':
                days = await query.findEverydayInYear(thisYear - 3);
                break;
            case 'Y.1':
                days = await query.findEverydayInYear(thisYear + 1);
                break;
            case 'Y.2':
                days = await query.findEverydayInYear(thisYear + 2);
                break;
        }

        var yr = new Year(days);
        longHolidays = yr.longHolidays;

        await longHolidays.forEach(item => {
            responseSentence = responseSentence + item.getExplanation();
        })

        output['Num_HolidayPeriod'] = longHolidays.length;
        output['HolidayPeriod_List'] = responseSentence.slice(0,-2);

        return output;

    },

    findholidayDate: async (holidayName) => {
        const output = {};
        const today = new Date();
        const thisYear = today.getFullYear();
        const holiday = await query.findHoliday(thisYear,holidayName); 

        output['holidayName'] = holiday.memo;
        output['Date_HolidayName'] = convertKorFormat(holiday.solar_date);

        return output;
        
        
    },
}

module.exports = nuguService;
