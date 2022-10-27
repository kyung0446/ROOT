const END_POSITION = -500;
const SEC_GAP = 200;
const BOX_WIDTH = 1000;
const tagFront = document.querySelectorAll('.front');
const tagProcess = document.querySelector('.progress-bar');
const tagStage = document.querySelector('.stage');
const tagBox = document.querySelector('.box');
const tagMenu = document.querySelector('nav');
let totalScroll = 0;
// const zSecPos = [-500,0,200,400,500];
const zSecPos = [];

const getIdxSection = (zPos) => {
    for( let i=0 ; i<zSecPos.length ; i++ ){
        if( zPos >= zSecPos[i] && zPos<zSecPos[i+1] ){
            return i;
        }
    }
    return 0;
}

const setMenuActive = (idx) => {
    const activeElem = document.querySelector('.active');
    activeElem.classList.remove('active');
    tagMenu.children[idx].classList.add('active');
}

const setSectionPos = () => {
    let endPos = END_POSITION;
    for( let i=1 ; i<=tagFront.length ; i++ ){
        tagFront[tagFront.length-i].style.transform = `translateZ(${endPos}vw)`;
        endPos+=SEC_GAP;
    }
    //menu gap zSecPos = [-500,0,200,400,600];
    endPos = END_POSITION + BOX_WIDTH + (SEC_GAP*0.5);
    for( let i=tagFront.length ; i>0 ; i-- ){
        zSecPos[i] = endPos;
        endPos -= SEC_GAP;
    }
    zSecPos[0] = END_POSITION;
}

const handlerResize = () => {
    totalScroll = document.documentElement.scrollHeight - window.innerHeight;
}

const handlerScroll = () => {    
    const scrollTop = window.pageYOffset;
    const scrollPer = (scrollTop / totalScroll);
    const zPos = scrollPer * (BOX_WIDTH-20) + END_POSITION;
    tagProcess.style.width = `${scrollPer*100}%`;
    tagBox.style.transform = `translateZ(${zPos}vw)`;    
    const idx = getIdxSection(zPos);
    setMenuActive(idx);
}
const handlerMouseMove = (event) => {
    const posX = -1 + (event.clientX/window.innerWidth)*2;
    const posY = 1 - (event.clientY/window.innerHeight)*2;
    tagStage.style.transform = `rotateX(${posY*6}deg) rotateY(${posX*6}deg)`;
}
const handlerMenuClick = (event) => {
    event.preventDefault();
    const target = event.target;
    if( target.tagName === 'A' ) {
        window.scrollTo(0,)
    }
}

const init = () => {
    setSectionPos();
    handlerResize();
    window.addEventListener('scroll',handlerScroll);
    window.addEventListener('resize', handlerResize);
    window.addEventListener('mousemove',handlerMouseMove);
    tagMenu.addEventListener('click',handlerMenuClick);
}

window.addEventListener('load',init);