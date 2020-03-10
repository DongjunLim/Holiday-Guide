'use strict'
const query = require('../db/query');
const LongHoliday = require('../LongHoliday');

const nuguService = {
    countHoliday: async (year = null, month = null) => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth() + 1;
        let num;

        switch (year) {
            case 'BID_DT_YEAR':
                num = await query.countHolidayInYear(thisYear);
                break;
            case 'BID_DT_YEAR.-1':
                num = await query.countHolidayInYear(thisYear - 1);
                break;
            case 'BID_DT_YEAR.-2':
                num = await query.countHolidayInYear(thisYear - 2);
                break;
            case 'BID_DT_YEAR.-3':
                num = await query.countHolidayInYear(thisYear - 3);
                break;
            case 'BID_DT_YEAR.1':
                num = await query.countHolidayInYear(thisYear + 1);
                break;
            case 'BID_DT_YEAR.2':
                num = await query.countHolidayInYear(thisYear + 2);
                break;
        }

        switch (month) {
            case 'BID_DT_MONTH':
                num = await query.countHolidayInMonth(thisYear, thisMonth);
                break;
            case 'BID_DT_MONTH.M.-1':
                num = await query.countHolidayInMonth(thisYear, thisMonth - 1);
                break;
            case 'BID_DT_MONTH.M.-2':
                num = await query.countHolidayInMonth(thisYear, thisMonth - 2);
                break;
            case 'BID_DT_MONTH.M.1':
                num = await query.countHolidayInMonth(thisYear, thisMonth + 1);
                break;
            case 'BID_DT_MONTH.M.2':
                num = await query.countHolidayInMonth(thisYear, thisMonth + 2);
                break;

        }

        return num;
    },

    findLongHolidayInYear: async (year) => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const output = {};
        let longHolidays = [];
        let dayList;
        let candidates = [];
        let isAlternativeHoliday = false;
        let responseSentence = '';
        switch (year) {
            case 'BID_DT_YEAR':
                dayList = await query.findHolidayInYear(thisYear);
                break;
            case 'BID_DT_YEAR.-1':
                dayList = await query.findHolidayInYear(thisYear - 1);
                break;
            case 'BID_DT_YEAR.-2':
                dayList = await query.findHolidayInYear(thisYear - 2);
                break;
            case 'BID_DT_YEAR.-3':
                dayList = await query.findHolidayInYear(thisYear - 3);
                break;
            case 'BID_DT_YEAR.1':
                dayList = await query.findHolidayInYear(thisYear + 1);
                break;
            case 'BID_DT_YEAR.2':
                dayList = await query.findHolidayInYear(thisYear + 2);
                break;
        }
        for (var i in dayList) {
            if (dayList[i].is_weekend) {
                candidates.push(dayList[i]);
                if ((dayList[i].day_of_the_week == 'Sat') || (dayList[i].day_of_the_week == 'Sun')) {
                    if ((dayList[i].memo == '설날연휴') ||
                        (dayList[i].memo == '추석연휴') ||
                        (dayList[i].memo == '어린이날')) {
                        isAlternativeHoliday = true;
                    }
                }
            } else {
                if (isAlternativeHoliday) {
                    candidates.push(dayList[i]);
                    isAlternativeHoliday = false;
                }
                if (candidates.length > 2) {
                    var longHoliday = new LongHoliday(candidates);
                    longHolidays.push(longHoliday);
                }
                candidates = [];
            }
        }
        await longHolidays.forEach(item => {
            responseSentence = responseSentence + item.getExplanation();
        })
        output['Num_HolidayPeriod'] = longHolidays.length;
        output['HolidayPeriod_List'] = responseSentence.slice(0,-2);
        return output;

    },

    findholidayDate: (holidayName) => {

    },
}
nuguService.findLongHolidayInYear('BID_DT_YEAR.2');

module.exports = nuguService;