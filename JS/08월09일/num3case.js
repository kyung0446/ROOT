/* 
    3의 배수 검사기
    사용자로부터 숫자를 입력받아 3의 배수면 "3의배수입니다." 아니면 "3의 배수가 아닙니다."를 출력해 주세요.
*/

//다큐먼트 객체 가지고 오기
const elemResult = document.querySelector("#result");
// console.log( elemResult );
let userNumer = parseInt( prompt("숫자를 입력하세요") );
// let value = userNumer % 3;
// 0 , 1 , 2
if( userNumer ){
    if( userNumer % 3 ){
        //true 일 경우
        // console.log( '3의 배수가 아닙니다.'); 
        elemResult.innerText = '3의 배수가 아닙니다.';
    } else {
        //false 경우
        // console.log( '3의 배수 입니다.');
        elemResult.innerText = '3의 배수 입니다.';
    }
} else if( userNumer === 0 ) {
    elemResult.innerText = '입력하신 숫자는 0 입니다';
} else{
    elemResult.innerText = "숫자가 아닙니다";
}


