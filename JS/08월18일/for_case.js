const number=[1,2,3,4];
const answer=[];  //각각의 숫자의 제곱값

// for( let i=0 ; i<number.length ; i++ ){
//     answer[i] = number[i]**2;
// }
// for ( let obj in number ) {
//     answer[obj] = number[obj]**2;
// }

// const returnValue = number.forEach( (value,index,arr)=> {
//     // console.log( value ); /*numner[i]*/
//     // console.log( index ); /*index*/
//     // console.log( arr );   /* this */
//     // console.log( '-----------');    
//     answer[index] = value**2;
//  } );

const returnValue = number.map( (value,index,arr)=>{
    return value**2;
} );

console.log( returnValue );
console.log( number );
console.log( answer );