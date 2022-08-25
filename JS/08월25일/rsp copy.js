/*
가위 : 0 , 바위 : 1 , 보 : 2
*/
const tagCom = document.querySelector('#com');
const tagSelf = document.querySelector('#self');
const tagBtn = document.querySelectorAll('#self>button');
let choice = 0;
let user = 0;
let message = '';
let intervalID = null;



const handlerInterval = ()=>{
    choice++;
    if( choice > 2) choice=0;
    // console.log( choice );
    tagCom.style.backgroundPosition = `${choice*(-220)}px`;
}
intervalID = setInterval( handlerInterval , 500 ); 

const compareNum = () => {
    //가위 : 0 , 바위 : 1 , 보 : 2
    let result = choice - user;
    message = '무승부';
    // if( result === -1 || result ===2 ) {
    //     message = '이겼다';
    // } else if( result === -2 || result === 1) {
    //     message = "졌다";
    // }
    // switch( result ) {
    //     case -1 :
    //     case 2 :
    //         message = '이겼다';
    //         break;
    //     case -2 :
    //     case 1 :
    //         message = '졌다';
    //         break;
    // }
    if( [-1,2].includes(result) ) {
        message = "이겼다";
    } else if( [-2,1].include (result) ){
        message = "졌다"
    }
    // switch( choice ) {        
    //     case 0 : /*가위*/
    //         if( result === -1 ) message = '이겼다';
    //         if( result === -2 ) message = '졌다'; 
    //         break;
    //     case 1 : /*바위*/
    //         if( result === 1 ) message = '졌다';
    //         if( result === -1 ) message = '이겼다';
    //         break;
    //     case 2 : /*보*/
    //         if( result === 2 ) message = '이겼다';
    //         if( result === 1 ) message = '졌다';
    //         break;
    // }
}

const handlerBtnClick = (event) => {
    user = parseInt(event.target.dataset.num);

    // if( obj.className === 'scissors') { number = 0; }
    // else if( obj.className === 'rock' ) { number = 1; }
    // else if( obj.className === 'paper' ) { number = 2; }
    tagSelf.style.backgroundPosition = `${user*(-220)}px`;
    clearInterval( intervalID );
    compareNum();
    // console.log( message );
    setTimeout( ()=>{
        intervalID = setInterval( handlerInterval , 500 ); 
    },5000);
}
tagBtn.forEach( (v) => {
    v.addEventListener( 'click', handlerBtnClick );
});