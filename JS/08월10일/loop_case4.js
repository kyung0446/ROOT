/*
    5! = 5*4*3*2*1 = 120
    입력 : 5
*/
// let max = 5;
// let value = 1;
// for( let i=max ; i>=1 ; i-- ){
//     value *= i;
// }
// console.log( `${max}! = ${value}`);

/*
    10 의 약수 : 1,2,5,10
    약수 : 임의의 수를 나누었을 때 나누어 떨어지는 수
*/
// let number = 10;
// for( let i=1 ; i<=number ; i++ ){
//     if( number%i === 0 ){
//         console.log( i );
//     }
// }

/*
    소수구하기 : 2,3,5,7
    1~10까지의 숫자중에서 소수를 출력하세요.
*/
let count = 0;
for( let i=0 ; i<=10 ; i++ ){
    count=0;
    for( let j=0 ; j<=10 ; j++ ){
        if( i % j === 0 ){
            count++;
        }
    }
    if( count === 2 ){
        console.log( i );
    }
}
