const LongHoliday = require('./LongHoliday');


class Year {

    constructor(days) {
        this.days = days;
        this.longHolidays = [];
        this.setLongHolidays();
    }

    setLongHolidays = async () => {
        var days = this.days;
        var holiday = [];

        for (var i in days) {
            if (days[i].is_weekend || days[i].is_holiday) {
                holiday.push(days[i]);
            } else {
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