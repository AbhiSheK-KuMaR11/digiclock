const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const sec = document.getElementById('sec');

const clock = setInterval(function time (){
    let dateToday = new Date();
    // console.log(dateToday);
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let secn = dateToday.getSeconds();
    // console.log(hrs, min, sec);
    if(hrs < 10){
        hrs = '0' +hrs;
    }
    if(min < 10){
        min = '0' +min;
    }
    if(secn < 10){
        secn = '0' +secn;
    }
    hour.textContent = hrs;
    minute.textContent = min;
    sec.textContent = secn;

}, 1000);