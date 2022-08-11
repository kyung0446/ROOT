// 함수
// 정의
// function 함수명(){
//     명령들;
// }
// 실행
// 함수명();

// addNumber();
// addNumber(10);
// addNumber(10,50);
// addNumber(10,50,90);

// let value = addNumber(10,50);
// console.log( value );

/********** */
function addNumber(a,b=10,c=30){    
    // let sum = a+b+c;
    // return sum;
    if( a >= 10 ) {
        return false;
    }
    return a+b+c;    
}
/*************** */

//익명함수
// let fnCall = function(){
//     console.log( 'function call');
// }
// fnCall();
//arrow 함수
// let fnCall = () => console.log( 'function call');
// fnCall();

// let hi = function() {
//     return 'hi, js';
// }
// let hi = () => 'hi, js';

// let hi = function(name) {
//     return `hi, ${name}`;
// }
// let hi = name => `hi, ${name}`;
// console.log( hi('길동') );

// let add = function(a,b) {
//     return a+b;
// }
// const add = (a,b) => a+b;
// console.log( add(10,20) );

// let 함수명 = (매개변수) => {
//     함수명령문;
// }

//즉시실행함수
(function(){
    console.log( 'fn call-----1');
})();
( ()=>{
    console.log( 'arrow call ----- 1');
})();

(function(){
    console.log( 'fn call-----2');
}());




