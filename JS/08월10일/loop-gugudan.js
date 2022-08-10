/*
4단 구구단 출력
4*1=4
4*2=8
.
.
.
*/
// for( let i=1 ; i<=9 ; i++ ){
//     console.log( `4 * ${i} = ${4*i}`);
// }

// for( let i=2 ; i<=9 ; i++ ) {
//     console.log( `**** ${i}단 출력 ****`);
//     for( let j=1 ; j<=9 ; j++ ){
//         console.log( `${i} * ${j} = ${i*j}`);
//     }
//     document.write('</div>');
// }


//2단부터 9단까지 출력
for( let i=2 ; i<=9 ; i++ ) {
    // console.log( `**** ${i}단 출력 ****`);
    document.write('<div>');
    document.write(`<h3>${i}단</h3>`);
    for( let j=1 ; j<=9 ; j++ ){
        document.write( `${i} * ${j} = ${i*j}<br>`);
    }
    document.write('</div>');
}