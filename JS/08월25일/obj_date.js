//let now = new Date();
// console.log( now.getFullYear() );
// console.log( now.getMonth()+1 );
// console.log( now.getDate() );
// console.log( now.getDay() ); /* 0~6 */
// /* 1910년1월1일 00:00 ~ 밀리초 */
// console.log( now.getTime() );
// console.log( now.getHours() );
// console.log( now.getMinutes() );
// console.log( now.getSeconds() );

/*
오늘 날짜로부터 28일이 지난 후의 날짜 계산
*/
// console.log( now );
// now.setDate(now.getDate()+28)
// console.log( now );

let now = new Date();
let firstDay = new Date('2022-05-16');
// let passedTime = now.getTime() - firstDay.getTime();
// let passedDay = Math.round( passedTime / (24*60*60*1000) );

/*
날짜를 2022-05-16
100일이 지났을 때 : 년-월-일
200일이 지났을 때 : 년-월-일
300일이 지났을 때 : 년-월-일
*/
//~~~일 지났을 때
const getPassedDate = (days) => {
    let passedTime = firstDay.getTime() + (1000*60*60*24*days);
    let someDay = new Date(passedTime);
    let someDayString = `${someDay.getFullYear()} 년 ${someDay.getMonth()+1} 월 ${someDay.getDate()} 일`;
    console.log( someDayString );
}
getPassedDate(100);
getPassedDate(200);
getPassedDate(300);
getPassedDate(365);


