// const arr = [
//     {id:0 , name:'aaa',age:6},
//     {id:1 , name:'bbb',age:3},
//     {id:2 , name:'ccc',age:5},
//     {id:3 , name:'ddd',age:2},
// ];
// let here = arr.some( el => el.name === 'eee' );
// here = arr.some( el => el.age > 5 );
// here = arr.every( el => el.name === 'bbb' );
// //
// here = arr.filter( el => el.age>=5 );
// console.log( here );

// const num = [1,2,3,4,5,6,7,8,9];
// const arrNum = num.filter( el => el%3 === 0 );
// console.log( arrNum );

// const value = [[1,[2,3]],[4,5,6],['a','b',['a','b','c']]];
//reduce
// const result = value.reduce( function(arr,el){
//     return arr.concat(el);
// },[] );
/*
reduce ( 누적된 값, 현재 요소값 , 현재 인덱스, 원본배열){ 
    return 변화되는 값;
} , 초기값
*/
// result = value.reduce( (arr,el)=> arr.concat(el),[] );

const value = [1,2,3,4,5];
const result = value.reduce( (sum,el) => {
    return sum+el;
},0 );

let sum=0;
for( let i=0 ; i<value.length ; i++ ){
    sum += value[i];
}

console.log( result );