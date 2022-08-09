/*
    사용자로부터 두 수를 입력받아 제일 큰 수를 출력해 주세요.
    입력 : 입력받은 두 수
    출력 : 제일 큰 수 
           비교 연산자를 사용한다.
*/
let a = parseInt( prompt('정수 입력 > ') );
let b = parseInt( prompt('정수 입력 > ') );
if( a>b ) {
    document.write('큰 수는 '+a+' 입니다.');
} else {
    document.write('큰 수는 '+b+' 입니다.');
}
