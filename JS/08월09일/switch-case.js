/*
    switch - case 문
    switch(조건문) {
        case 값1 :  //조건문장 값 === 값1
            명령문장;
            break;  //continue; 
    }
*/
//let subject = 'js';
/* c언어, javascript , java , 아무것도 아닐경우 */
// if( subject == 'C' ){
//     console.log( 'C언어 입니다.');
// } else if( subject == 'js' ){
//     console.log( 'javascript 입니다.');
// } else if( subject == 'java' ) {
//     console.log( 'java 언어 입니다.');
// } else {
//     console.log( '선택언어 없습니다.');
// }

// let subject = 'js';
// switch( subject ){
//     case 'C' :
//         console.log( 'C언어 입니다.');
//         break;
//     case 'js' :
//         console.log( 'javascript 입니다.');
//         break;
//     case 'java' :
//         console.log( 'java 언어 입니다.');
//         break;
//     default :
//         console.log( '선택언어 없습니다.');
//         break;
// }

/*
    5의 배수일 경우에는 5의 배수 입니다를 출력
    아닐 경우는 5의 배수가 아닙니다를 출력
    swtich-case 문을 이용해서 작성해 주세요.
*/
let n = 8;
//let result = n%5; //0,1,2,3,4
// switch( n%5 ){
//     case 0 :
//         console.log( '5의 배수 입니다.');
//         break;
//     default :
//         console.log( '5의 배수가 아닙니다.');
//         break;
// }

switch( n%5 ) {
    case 1:
    case 2:
    case 3:
    case 4:
        console.log( '5의 배수가 아닙니다.');
        break;
    default :
        console.log( '5의 배수 입니다.');
        break;
}