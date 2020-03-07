module.exports = function (sequelize, DataTypes) {
    const calendar = sequelize.define('calendar', {
        idx: { field: 'num', type: DataTypes.INTEGER(11), allowNull: false, primaryKey: true },
        lunar_date: { field: 'lunar_date', type: DataTypes.STRING(10), allowNull: false },
        solar_date: { field: 'solar_date', type: DataTypes.DATE, allowNull: false },
        yun: { field: 'yun', type: DataTypes.TINYINT(1), allowNull: false, defaultValue: 0 },
        memo: { field: 'memo', type: DataTypes.STRING(50), allowNull: false, defaultValue: '' },
        ganji: { field: 'ganji', type: DataTypes.STRING(5), defaultValue:''},
        is_weekend: { field: 'is_weekend', type: DataTypes.BOOLEAN, allowNull : false, defaultValue:false},
        day_of_the_week: { field: 'day_of_the_week', type:DataTypes.STRING, allowNull:false, defaultValue:''}
    },{
        charset: 'utf8',
        collate:'utf8_unicode_ci',
        timestamps:false,
        tableName:'calendar'
    });

    return calendar
}