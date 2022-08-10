/*
    안녕하세요를 5번 출력
*/
// for( let i=0 ; i<5 ; i++ ){
//     console.log( `안녕하세요---${i}`);
// }

/*
    i가 2보다 크면 반복문 종료
*/
// for( let i=0 ; i<5 ; i++ ){
//     console.log( `i=${i}`);
//     if( i > 2 ) break;
//     console.log( `안녕하세요---${i}`);
// }

/*
    continue문
*/
for( let i=0 ; i<5 ; i++ ){
    console.log( `i=${i}`);
    if( i < 2 ) continue;
    console.log( `안녕하세요---${i}`);
}