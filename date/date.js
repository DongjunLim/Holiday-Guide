


module.exports = convertKorFormat = (solar_date) => {
    var weekKorName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

    var year = solar_date.getFullYear();
    var month = solar_date.getMonth()+1;
    var day = solar_date.getDate();
    var day_of_the_week = weekKorName[solar_date.getDay()];

    return month + '월 ' + day + '일 ' + day_of_the_week;
    
}