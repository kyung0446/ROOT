/*
    사용자로부터 3 수를 입력받아 제일 큰 수를 출력해 주세요.
    입력 : 입력받은 세 수
    출력 : 제일 큰 수 
           비교 연산자를 사용한다.
*/
let a = parseInt( prompt('정수 입력 > ') );
let b = parseInt( prompt('정수 입력 > ') );
let c = parseInt( prompt('정수 입력 > ') );
if( a>b ){
    //a가 큰 상태
    if( a>c ) {
        //a가 가장 큰 상태
        document.write(`가장 큰 수는 = ${a} 입니다.`);
    } else {
        //c가 가장 큰 상태
        document.write(`가장 큰 수는 = ${c} 입니다.`);
    }
} else{
    //b가 큰 상태
    if( b>c ) {
        //b가 가장 큰 상태
        document.write(`가장 큰 수는 = ${b} 입니다.`);
    } else {
        //c가 가장 큰 상태
        document.write(`가장 큰 수는 = ${c} 입니다.`);
    }
}



