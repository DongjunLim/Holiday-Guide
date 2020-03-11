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
        let korYear, korMonth;

        switch (year) {
            case 'Y.0':
                num = await query.countHolidayInYear(thisYear);
                korYear = '올해';
                break;
            case 'Y.-1':
                num = await query.countHolidayInYear(thisYear - 1);
                korYear = '작년';
                break;
            case 'Y.-2':
                num = await query.countHolidayInYear(thisYear - 2);
                korYear = '재작년';
                break;
            case 'Y.-3':
                num = await query.countHolidayInYear(thisYear - 3);
                korYear = '재재작년';
                break;
            case 'Y.1':
                num = await query.countHolidayInYear(thisYear + 1);
                korYear = '내년';
                break;
            case 'Y.2':
                num = await query.countHolidayInYear(thisYear + 2);
                korYear = '내후년';
                break;
        }

        switch (month) {
            case 'M.0':
                num = await query.countHolidayInMonth(thisYear, thisMonth);
                korMonth = '이번달';
                break;
            case 'M.-1':
                num = await query.countHolidayInMonth(thisYear, thisMonth - 1);
                korMonth = '저번달';
                break;
            case 'M.-2':
                num = await query.countHolidayInMonth(thisYear, thisMonth - 2);
                korMonth = '저저번달';
                break;
            case 'M.1':
                num = await query.countHolidayInMonth(thisYear, thisMonth + 1);
                korMonth = '다음달';
                break;
            case 'M.2':
                num = await query.countHolidayInMonth(thisYear, thisMonth + 2);
                korMonth = '다다음달';
                break;

        }
        output['slotFilling_numHoliday'] = num;
        (korYear) ? output['slotFilling_korDate'] = korYear : output['slotFilling_korDate'] = korMonth;
        return output;

    },

    findLongHolidayInYear: async (year) => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const output = {};
        let longHolidays = [];
        let days;
        let responseSentence = '';
        let korYear;

        switch (year) {
            case 'Y.0':
                days = await query.findEverydayInYear(thisYear);
                korYear = '올해';
                break;
            case 'Y.-1':
                days = await query.findEverydayInYear(thisYear - 1);
                korYear = '작년';
                break;
            case 'Y.-2':
                days = await query.findEverydayInYear(thisYear - 2);
                korYear = '재작년';
                break;
            case 'Y.-3':
                days = await query.findEverydayInYear(thisYear - 3);
                korYear = '재재작년';
                break;
            case 'Y.1':
                days = await query.findEverydayInYear(thisYear + 1);
                korYear = '내년';
                break;
            case 'Y.2':
                days = await query.findEverydayInYear(thisYear + 2);
                korYear = '내후년';
                break;
        }

        var yr = new Year(days);
        longHolidays = yr.longHolidays;

        await longHolidays.forEach(item => {
            responseSentence = responseSentence + item.getExplanation();
        })

        output['Num_HolidayPeriod'] = longHolidays.length;
        output['HolidayPeriod_List'] = responseSentence.slice(0, -2);
        output['korDate'] = korYear;
        return output;

    },

    findholidayDate: async (holidayName) => {
        const output = {};
        const today = new Date();
        const thisYear = today.getFullYear();
        const holiday = await query.findHoliday(thisYear, holidayName);

        output['holidayName'] = holiday.memo;
        output['Date_HolidayName'] = convertKorFormat(holiday.solar_date);

        return output;
    },
}
module.exports = nuguService;
