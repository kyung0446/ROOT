let fruits = ['apple','banana'];
// console.log( fruits[0] );
fruits[2] = 'orange';
fruits.push('melon');
fruits[fruits.length] = 'berry';
fruits.unshift('add');
// fruits.pop();
// fruits.shift();
// fruits.forEach( (v,i) => {
//     console.log( `v=${v}  i=${i}` );
// })
// console.log( fruits );
fruits.splice( 1,2 );
// console.log( fruits );
fruits.splice( 1, 0 , 'apple','banana');
console.log( fruits );
console.log( fruits.indexOf('apple') );




