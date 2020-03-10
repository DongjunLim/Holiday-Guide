const LongHoliday = require('./LongHoliday');


class Year {

    constructor(days) {
        this.days = days;
        this.longHolidays = [];
        this.setLongHolidays();
    }

    setLongHolidays = async () => {
        var days = this.days;
        var isAlternativeHoliday = false;
        var holiday = [];

        for (var i in days) {
            if (days[i].is_weekend) {
                holiday.push(days[i]);
                if ((days[i].day_of_the_week == 'Sat') || (days[i].day_of_the_week == 'Sun')) {
                    if ((days[i].memo == '설날연휴') ||
                        (days[i].memo == '추석연휴') ||
                        (days[i].memo == '어린이날')) {
                        isAlternativeHoliday = true;
                    }
                }
            } else {
                if(isAlternativeHoliday){
                    holiday.push(days[i]);
                    isAlternativeHoliday = false;
                }
                if(holiday.length > 2){
                    var longholiday = new LongHoliday(holiday);
                    this.longHolidays.push(longholiday);
                }
                holiday = [];
            }

        }
        return;
    }

    get getLongHolidays(){
        return this.longHolidays;
    }
    get getDays(){
        return this.getDays;
    }




}


module.exports = Year;