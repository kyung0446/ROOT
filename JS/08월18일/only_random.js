/*
    0<= random <10
*/
const choiseNumber = () => {
    // const number = []; //0~9
    // for( let i=0 ; i<10 ; i++ ){
    //     number.push(i);
    // }
    // const number = Array(10).fill().map( (value,index)=>index );    
    const number = new Array(10).fill(1);
    number.forEach( (value,index) => {
        number[index] = index;
    })  

    const answer = [];  //4개 저장
    for( let n=0 ; n<4 ; n++ ){
        const idx = Math.floor(Math.random()*number.length);
        answer.push( number[idx] );
        number.splice(idx,1);
    }
    console.log( answer );
}

const analysisNumber = ()=>{
    let answer = [];   /* 4개의 랜덤한 숫자를 저장 */
    while( answer.length < 4 ){
        let temp = Math.floor(Math.random()*10);  /* 0~9*/
        // if( !answer.includes(temp) )
        if( answer.includes(temp) == false ){
            answer.push(temp);
        }
    }
    console.log( answer );
}
// analysisNumber();

const arrIncludes = (arr,value) => { 
    for( let i=0 ; i<arr.length ; i++ ){
        if( arr[i] === value ) {
            return true;
        }
    }
    return false;
}

let data = arrIncludes( [1,2,3,4,5] , 3 );
console.log( data );

