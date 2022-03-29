let year = prompt('Nhập số năm: ');
let isLeapyear = false;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            // alert('This is a leap year');
            isLeapyear = true;
            // } else {
            //     alert('This is a not leap year');
        }
    } else {
        // alert('this a leap year');
        isLeapyear = true;
    }
// } else alert('this is a not leap year');
}
if(isLeapyear){
    alert(year + ' is a leap Year');
}else alert( year +' is not a leap Year');