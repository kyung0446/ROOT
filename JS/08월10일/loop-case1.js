//3개의 문장이 동시에 작성
// for(초기값;조건식;반복값){
//     실행명령문;
// }

// for( let i=0 ; i<10 ; i++ ){
//     console.log( i );
// }

// for( let i=1 ; i<=10 ; i++ ){
//     console.log( i );
// }

// for( let i=2 ; i<=10 ; i+=2 ){
//     console.log( i );
// }

let text = ['a','b','c','d'];
// for( let i in text ){
//     console.log( i );
// }
// for( let i of text ) {
//     console.log( i );
// }
for( let i=0 ; i<text.length ; i++ ){
    console.log( i );
    console.log( text[i] );
}