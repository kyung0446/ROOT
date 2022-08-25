/*
가위 : 0 , 바위 : 1 , 보 : 2
*/
const tagCom = document.querySelector('#com');
const tagSelf = document.querySelector('#self');
const tagBtn = document.querySelectorAll('#self>button');
let choice = 0;
let user = 0;
let intervalID = null;
const jumsu = {
    com : 0,
    saram : 0,
};

const handlerInterval = ()=>{
    choice++;
    if( choice > 2) choice=0;
    // console.log( choice );
    tagCom.style.backgroundPosition = `${choice*(-220)}px`;
}
intervalID = setInterval( handlerInterval , 500 ); 

const drawSumju = (msg) => {
    /* <p>msg</p>
        body 아래에 추가 
    */
    const obj = document.createElement('p');
    obj.textContent = msg;
    obj.className = 'result';
    document.querySelector('body').appendChild(obj);
    //
    // obj.classList.add('bg');  /*추가*/
    // obj.classList.remove('result'); /*삭제*/
}

const compareNum = () => {
    //가위 : 0 , 바위 : 1 , 보 : 2
    let result = choice - user;
    let message = '무승부';
    if( [-1,2].includes(result) ) {
        message = "이겼다";
        jumsu.saram++;
    } else if( [-2,1].includes(result) ){
        message = "졌다";
        jumsu.com++;
    }
    drawSumju(message);
}

const checkJumsu = () => {
    if( jumsu.com >= 3 ){
        return "컴퓨터가 이겼습니다.";
    } else if( jumsu.saram >=3 ) {
        return "사람이 이겼습니다.";
    }
    return '';
}

const handlerBtnClick = (event) => {
    user = parseInt(event.target.dataset.num);

    tagSelf.style.backgroundPosition = `${user*(-220)}px`;
    clearInterval( intervalID );
    compareNum();
    // console.log( message );
    let data = checkJumsu();
    if( data ){
        //화면에 뿌려주기
        drawSumju(data);
    } else {
        setTimeout( ()=>{
            intervalID = setInterval( handlerInterval , 500 ); 
        },5000);
    }
}




/*************************************************** */

    window.addEventListener('blur',()=>{
        console.log( '떠납니다');
    });
    window.addEventListener('focus',()=>{
        console.log( '돌아왔습니다');
    });
    window.addEventListener('beforeunload',(event)=>{
        event.preventDefault();
        event.returnValue = '';
        alert( '가니?');
    });
    tagBtn.forEach( (v) => {
        v.addEventListener( 'click', handlerBtnClick );
    });
/*************************************************** */
