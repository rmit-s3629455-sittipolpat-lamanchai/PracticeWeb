let day = new Date();
let dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dayTimeList = ['AM','PM'];

let dayR = (day.getHours() > 12)? (day.getHours() - 12): day.getHours();
let dayTime = (day.getHours() < 12)? dayTimeList[0]:dayTimeList[1];

console.log(`Today is: ${dayList[day.getDay()]}`);

console.log(`Current Time is: ${dayR} ${dayTime} : ${day.getMinutes()} : ${day.getSeconds()}`);

let removeBut = document.getElementsByClassName('complete');

