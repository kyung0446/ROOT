let firstDay = new Date('2022-05-16');

//몇일이 지났는지 day1에 표시되는 날짜
const getPassedDate = () => {
    let now = new Date();
    let passedTime = now.getTime() - firstDay.getTime();
    let passedDay = Math.round( passedTime / (24*60*60*1000) );
    let obj = document.querySelector('.pass');
    obj.textContent = passedDay + '일';
}

//100일, 200일, 300일, 1년 day2에 표시되는 날짜
const getSomeDate = (days) => {
    let someTime = firstDay.getTime() + (1000*60*60*24*days);
    let someDay = new Date(someTime);
    let someDayString = `${someDay.getFullYear()}년 ${someDay.getMonth()+1}월 ${someDay.getDate()}일`;
    return someDayString;
}
const printDayString = (days) => {
    let year = Math.floor(days / 365);
    let day = days % 365;
    let strYear = year ? year+'년' : '';
    let strDay = day ? day+'일' : '';
    return strYear + strDay;
}
const createDay2Date = (days) => {    
    let objP1 = document.createElement('p');
    //objP1.textContent = days+'일';
    objP1.textContent = printDayString(days);
    let objP2 = document.createElement('p');
    objP2.textContent = getSomeDate(days);
    let objDiv = document.createElement('div');
    objDiv.append( objP1,objP2 );
    document.querySelector('.day2').appendChild(objDiv);
}

getPassedDate();
createDay2Date(100);
createDay2Date(200);
createDay2Date(300);
createDay2Date(365);
createDay2Date(365+10);
createDay2Date(365*2);
