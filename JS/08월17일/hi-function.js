// const arr1 = [2,4,6];
// const arr2 = [];  //4,16,36
// for( let i=0 ; i<arr1.length ; i++ ){
//     arr2.push( arr1[i] * arr1[i] );
// }

// const arr1 = [2,4,6];
// const arr2 = [];  //4,16,36
// for ( let i of arr1 ){
//     arr2.push( i * i );
// }


// const arr1 = [2,4,6];
// const arr2 = arr1.map( function(item) {
//     return item * item;
// });


// const arr1 = [2,4,6];
// const arr2 = arr1.map( item => item * item );

// console.log( arr2 );

/*
    문자열의 배열을 가지고 각각의 문자의 길이를 표시해 주는 고차함수
    arrString = ['aaa','bbbb','c','dddddd']
    arrLength = [3,4,1,6]
*/
// const arrString = ['aaa','bbbb','c','dddddd'];
// const lenForEach = (arr,fn) => {
//     const newArray = [];
//     for( let i=0 ; i<arr.length ; i++ ){
//         newArray.push( fn(arr[i]) );
//     }
//     return newArray;
// }
// // const lenArray = lenForEach( arrString , item =>item.length );
// const lenArray = lenForEach( arrString , function(item) {
//     return item.length;
// });
// console.log( lenArray );

const arrString = ['aaa','bbbb','c','dddddd'];
const lenArray = [];
// for( let i=0 ; i<arrString.length ; i++ ){
//     lenArray.push( arrString[i].length );
// }
// for( let arr of arrString ){
//     lenArray.push( arr.length );
// }
// arrString.forEach( fn );
// function fn( value,index,array) {
//     console.log( 'value=', value );
//     console.log( 'index=', index );
//     console.log( 'array=',array );
//     console.log( '---------------');
// }
// arrString.forEach( (item) => {
//     lenArray.push(item.length);
// });
// console.log( lenArray );

/*
const func = (msg) => {
    return () => {
        console.log( msg );
    }
}
const msg1 = func('hi');
const msg2 = func('hello');
msg1();
msg2();
*/