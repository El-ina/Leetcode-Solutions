/**
 * @param {string} date
 * @return {string}
 */
// Source - https://stackoverflow.com/a/4726056
// Posted by Kyle Wild
// Retrieved 2026-06-09, License - CC BY-SA 2.5

function pad_with_zeroes(number, length) {

    var my_string = '' + number;
    while (my_string.length < length) {
        my_string = '0' + my_string;
    }

    return my_string;

}


var reformatDate = function(date) {
    let monthsArr = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    let dateArr = date.split(" ");
    let day = dateArr[0];
    let dayNr = "";
    for(let i = 0; i < day.length; i++){
        let chr = day[i];
        if(chr >= '0' && chr <= '9'){
            dayNr += chr;
        }
    }
    dayNr = pad_with_zeroes(dayNr, 2);
    let monthNr = monthsArr.indexOf(dateArr[1]) + 1;
    monthNr = pad_with_zeroes(monthNr, 2);
    let yearNr = dateArr[2];

    return `${yearNr}-${monthNr}-${dayNr}`;
    
};