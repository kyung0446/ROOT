/*
while문을 이용하여

 1-2+3-4+5-6+7-8.....-100 의 계산값을 구하시오.
*/
// let sum = 0;
// let i=0;
// while(i<100){   
//     i++; 
//     if( i%2 === 0 ){
//         sum -= i;
//     } else {
//         sum += i;
//     }    
// }
// console.log( `계산값 = ${sum}`);

// let sum = 0;
// for( let i=1 ; i<=100 ; i++ ){
//     if( i%2 ) {
//         //홀수
//         sum += i;
//     } else{
//         //짝수
//         sum -= i;
//     }
// }
// console.log( `계산값 = ${sum}`);

/*
(숫자)
 시작값 : 10 , 끝값은 15
 1+0+1+1+1+2+1+3+1+4+1+5 = 21
*/
let startNum = 10;
let value = startNum;
let sum = 0;
while( startNum <= 15 ){   
    while( value > 0 ) {
        sum += value%10;
        value = parseInt( value/10 );
    }
    // startNum++;
    // ++startNum;
    startNum+=1;
    value = startNum;
    // value = ++startNum;
}
console.log( `각 자리수 합 = ${sum}`);

// let arr=[];
// let sum =0;
// for( let i=0 ; i<=5 ; i++ ){
//     arr[i] = i+10;
// }
// arr.forEach( function(n) {
//     console.log( "n="+n);
//     while( n>0 ){
//         sum += n%10;
//         n = parseInt( n/10 );
//     }
// });
// console.log( `각 자리수 합 = ${sum}`);
