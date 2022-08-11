// let a = 5;
// let b = 0;
// b = a;
// a = 10;
// console.log( `a=${a}  b=${b}`);

let a = [1,2,3,4,5];
let b = [];
b=a;
a[2] = 10;
// console.log( `a=${a}  b=${b}`);

// for( let i=0 ; i<a.length ; i++ ){
//     console.log( a[i] );
// }
a.push('a');
console.log( `a=${a}`);
// console.log( a.pop() );
console.log( `a=${a}`);
console.log( typeof(a) );

