const TOTAL = 12;
let color_list = [];
let choiceCard = [];
let success = 0;

const shuffleColors = () => {
    const colors = ['red','orange','purple','green','aqua','pink'];
    const total_colors = colors.concat( colors );
    for( let i=0 ; i<TOTAL ; i++ ){
        const idx = Math.floor(Math.random()*total_colors.length);
        color_list.push( total_colors[idx] );
        total_colors.splice(idx,1);
    }
}

const createDivElem = (divClassName, color="none") => {
    const divElem = document.createElement('div');
    divElem.className = divClassName;
    divElem.style.backgroundColor = color;
    return divElem;
}

const handerClickCard = (event) => {  
    // console.dir( obj );
    // console.log( obj.childNodes[0].style.backgroundColor );
    // console.log(obj.querySelector('.card-front').style.backgroundColor);
    const obj = event.currentTarget;
    obj.classList.add('open');
    choiceCard.push( obj );
    
    if( choiceCard.length !== 2 ) return;

    // //색깔이 같은지 틀린지를 확인
    const first = choiceCard[0].querySelector('.card-front').style.backgroundColor;
    const second = choiceCard[1].querySelector('.card-front').style.backgroundColor;
    if( first === second ) {
        //같은 색상의 카드 선택
        success++;
        if( success >= (TOTAL/2) ) {
            setTimeout( ()=>{
                alert('축하합니다');
                init();
            },1000);
        }
    } else{
        //다른 색상의 카드 선택
        choiceCard.forEach( (v) => {
            setTimeout( ()=>{
                v.classList.remove('open');
            } , 1000 );
        })
    }
    //선택된 카드를 초기화
    choiceCard = [];
}
const createCardElem = () => {
    for( let i=0 ; i<TOTAL ; i++ ){
        const card = createDivElem('card');        
        card.appendChild(createDivElem('card-front',color_list[i]));
        card.appendChild(createDivElem('card-back',"blue"));   
        card.addEventListener( 'click', handerClickCard );     
        document.querySelector('#wrapper').appendChild(card);
    }
}
const startCardRotate = () => {
    document.querySelectorAll('.card').forEach( (v,idx) => {
        setTimeout( ()=>{
            v.classList.add('open');
        } , 1000+(200*idx) );
    });
    startCardGame();
}
const startCardGame = () => {
    //3초 있다가 원래 상태로 복귀 모든 카드의 back이 보이게
    document.querySelectorAll('.card').forEach( (v,idx) => {
        setTimeout( ()=>{
            v.classList.remove('open');
        },4000);
    } );
}
const init = () => {
    color_list = [];
    choiceCard = [];
    success = 0;    
    document.querySelector('#wrapper').innerHTML = '';
    /* 무작위 색상을 만들어 준다.*/
    shuffleColors();     
    /* 카드 객체를 생성하여 만들어 준다. */
    createCardElem();
    /* 프로그램이 실행됨과 동시에 카드를 다 뒤집어 주면서 보여준다.*/
    startCardRotate();
}
init();

