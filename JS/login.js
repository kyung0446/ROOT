/*
    이름을 입력받아 로그인 메시지를 출력해 보세요.

    입력 : 이름(사용자가 입력)
    출력 : ${이름} 님이 로그인 하셨습니다. 메시지 출력

    0. 변수 선언 - let loginName
    1. 입력창을 띄운다(이름을 입력받기 위해서)
    1-1. 입력창에 입력된 이름을 변수에 저장한다.(loginName)
    2. 메시지를 출력한다.
*/
// let loginName = prompt('사용자 이름을 입력하세요');
// document.write( `${loginName} 님이 로그인 하셨습니다.`);


/*
    숫자 3과 숫자 5의 덧셈과 곱셈을 출력하세요.
    (변수에 저장하여)
    입력 : 숫자3, 숫자5 
    출력 : 숫자3+숫자5 , 숫자3*숫자5

    1. 변수 선언(const) : num3 , num5
    2. 값을 할당한다.  num3 = 3, num5 = 5
    3. 연산을 하여 변수에 저장한다 ( add , mult )
    4. 출력한다.(add, mult)
*/
// const num3=3 , num5=5;
// const add = num3+num5;
// const mult = num3*num5;
// console.log( `두 수의 합 = ${add}`);
// console.log( `두 수의 곱 = ${mult}`);

/*
    두 수를 입력받아 사칙연산의 값을 출력하세요.(+,-,*,/)
    입력 : 두 수(사용자로부터 입력받은)
    출력 : 사칙연산의 값(+,-,*,/)
    1. 두 수를 입력받는다.(prompt)-> 2번과 동시 실행
    1-1, 각각의 수를 따로 입력받아 변수에 저장한다.
    (inputNum1, inputNum2)
    2. 두 수의 값을 숫자형으로 바꾼다.
    3. 연산을 한다.(순서는 + -> - -> * -> / )
    4. 연산을 바로 출력한다.
*/
let inputNum1 = parseInt( prompt('정수를 입력하세요') );
let inputNum2 = parseInt( prompt('정수를 입력하세요') );
console.log( `두 수의 합 = ${inputNum1+inputNum2}`);
console.log( `두 수의 차 = ${inputNum1-inputNum2}`);
console.log( `두 수의 곱 = ${inputNum1*inputNum2}`);
console.log( `두 수의 몫 = ${inputNum1/inputNum2}`);
