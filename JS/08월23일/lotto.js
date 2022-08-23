//6개의 추첨번호를 추출
// 1<= num <=45
let winResult = [];
let bonus = 0;

//함수 정의
const addRandom = (value, objParent) =>{
    const drawNum = document.createElement('div');
    // const temp = Math.round( Math.random()*0xffffff);
    const colorCode = '#'+ Math.ceil(Math.random()*0xffffff).toString(16);
    drawNum.className = 'choice';
    drawNum.textContent = value;
    drawNum.style.backgroundColor = colorCode;
    objParent.appendChild(drawNum);    
}

const shuffleData = () => {
    let result = [];
    const number = new Array(45).fill().map( (v,i)=>i+1 );
    for( let i=0 ; i<7 ; i++ ){
        const idx = Math.floor( Math.random()*number.length );
        result.push( number[idx] );
        number.splice( idx,1 );
    }
    bonus = result[6];
    winResult = result.splice(0,6).sort( (a,b) => a-b );
    // console.log( winResult );
}

const drawBall = () => {
    //객체를 생성하고 추가
    const tagResult = document.querySelector('#result');
    winResult.forEach( (v,idx) => {        
        // addRandom( v , tagResult );
        setTimeout( ()=>{
            addRandom( v , tagResult );
        },(idx+1)*1000 );
    });
}
const drawBonus = () => {
    //보너스
    const tagBonus = document.querySelector('#bonus');
    setTimeout( ()=>{
        addRandom( bonus , tagBonus );
    },7000);    
}

const init = () => {
    /* 숫자 6개를 추출한다.*/
    shuffleData();
    /* 추출한 6개의 숫자를 그려준다.*/
    drawBall();
    //bonus 그려주기
    drawBonus();
}

init();






