/*
전역변수 : 스크립트 소스 전체에서 사용이 되는 변수
지역변수 : 함수 내에서만 사용이 되는 변수
블록변수 : { } 안에서만 사용이 되는 변수
let , const --> 블록변수를 기반
var --> 지역변수를 기반
*/

let myVar = 100;

let myFunction = () => {
    let secondVar = 200;
    let myVar = 300;
    if( myVar >= 300) {
        let var3 = 500;
        var var4 = 600;
    }
    console.log( `myVar = ${myVar}`);
    console.log( `secondVar=${secondVar}`);
    // console.log( `var3 = ${var3}`);
    console.log( `var4 = ${var4}`);
    console.log( `var5 = ${var5}`);

    var var5 = 700;

    for( let i=0 ; i<5 ; i++ ){
        console.log()
    }
}
myFunction();
// console.log( `secondVar=${secondVar}`);

$(function(){
    
})();


( ()=>{
    let val = 1;
})();

text=1;