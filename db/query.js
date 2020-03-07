const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const query = {
    countHolidayInYear: async (year) => {

        const firstDayOfYear = year + '-01-01';
        const lastDayOfYear = year + '-12-31';
        // let output = {}

        let output = await models.calendar.count({
            // attribute: ['solar_date'],
            where: {
                solar_date: { [Op.between]: [Date.parse(firstDayOfYear), Date.parse(lastDayOfYear)] },
                memo: { [Op.ne]: '' }
            }
        });

        return output;

    },
    countHolidayInMonth: async (year, month) => {
        let likeValue = '';
        if (month >= 10) {
            likeValue = year + '-' + month + '%';
        } else {
            likeValue = year + '-0' + month + '%';
        };
        let query = `select count(*) from calendar where solar_date like :value and memo != '';`
        
        let result = await models.sequelize.query(query, {replacements: { value: likeValue}});
        
        output = result[0][0]['count(*)'];
        await console.log(output);
        return output;
    }
}

query.countHolidayInMonth(2020,3);
module.exports = query;