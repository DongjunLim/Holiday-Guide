const convertKorFormat = require('../date/date');

class LongHoliday {
    constructor(holidays) {
        this._setTitle(holidays);
        this.firstDate = convertKorFormat(holidays[0]['solar_date']);
        this.endDate = convertKorFormat(holidays[holidays.length - 1]['solar_date']);
        this.period = holidays.length;
    }
    _setTitle = async (holiday) => {
        holiday.some(item => {
            if (item.memo == '설날연휴') {
                this.title = '설날연휴';
                return item.memo == '설날연휴';
            } else if (item.memo == '추석연휴') {
                this.title = '추석연휴';
                return item.memo == '추석연휴';
            } else if (item.memo != '') {
                this.title = item.memo + '연휴';
            }
        });
    }

    getExplanation = () => {
        return `${this.title} ${this.firstDate}부터 ${this.endDate}까지 ${this.period}일. `;
    }

}




module.exports = LongHoliday;