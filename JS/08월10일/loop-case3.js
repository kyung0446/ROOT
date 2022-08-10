/*
사용자에게 숫자를 입력받아서 입력받은 수까지의 합을 출력시켜 주세요.
입력 : 사용자에게 입력
출력 : 합계 (sum)
*/
let inputNum = parseInt( prompt("정수를 입력하세요 >") );
let sum = 0;
for( let i=1 ; i<=inputNum ; i++ ){
    sum += i;
}
document.write( `${inputNum}까지의 합 = ${sum}`);


