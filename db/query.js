const models = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const query = {
    countHolidayInYear: async (year) => {

        const firstDayOfYear = year + '-01-01';
        const lastDayOfYear = year + '-12-31';

        let output = await models.calendar.count({
            where: {
                solar_date: { [Op.between]: [Date.parse(firstDayOfYear), Date.parse(lastDayOfYear)] },
                is_holiday:1,
                is_weekend:0 
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
        let query = `select count(*) from calendar where solar_date like :value and is_holiday = 1 and is_weekend = 0;`

        let result = await models.sequelize.query(query, { replacements: { value: likeValue } });

        output = result[0][0]['count(*)'];
        return output;
    },

    findEverydayInYear: async (year, month) => {
        const firstDayOfYear = year + '-01-01';
        const lastDayOfYear = year + '-12-31';

        return output = await models.calendar.findAll({
            attributes: ['solar_date', 'memo', 'is_weekend', 'day_of_the_week','is_holiday'],
            where: {
                solar_date: { [Op.between]: [Date.parse(firstDayOfYear), Date.parse(lastDayOfYear)] },
            },
            raw: true,
        });
    },

    findHoliday: async (year, name) => {
        const firstDayOfYear = year + '-01-01';
        const lastDayOfYear = year + '-12-31';

        return output = await models.calendar.findOne({
            attributes: ['solar_date', 'memo'],
            where: {
                solar_date: { [Op.between]: [Date.parse(firstDayOfYear), Date.parse(lastDayOfYear)] },
                memo: name,
            },
            raw: true,
        })

    }
}

module.exports = query;