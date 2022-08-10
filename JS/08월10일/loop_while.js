/*
while(조건식===true) {
    반복한 명령문;
}
*/
// let i=0;
// while(i<10){
//     console.log( `안녕하세요------${i}`);
//     i++;
// }

// let i=0;
// while(true){
//     console.log( `안녕하세요------${i}`);
//     i++;
//     if( i>=10 ) break;
// }

/*
    while문을 이용하여
    사용자로부터 정수를 입력받아서 각 자리수 합을 구하는 프로그램을 작성하세요.
    입력 : 3849 (문자열)
    출력 : 24 ( 3+8+4+9 )
*/
/*
let value = '3849';
let idx = 0;
let sum = 0;

// value += '';
while( idx < value.length ){
    sum += parseInt( value[idx] );
    idx++;
}
console.log( `각 자리수의 합 = ${sum}`);
*/

let value = 3849;
let sum = 0;
while(value > 1){
    sum += value %10;
    value = parseInt( value / 10 );
}
console.log( `각 자리수의 합 = ${sum}`);

