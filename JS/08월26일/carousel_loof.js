const tagNext = document.querySelector('.slide-btn > .next');
const tagPrev = document.querySelector('.slide-btn > .prev');
const tagSlideList = document.querySelector('.slide-list');
const tagSlideImg = document.querySelectorAll('.slide-list>img');
const tagPlay = document.querySelector('.play-btn>.play');
const tagStop = document.querySelector('.play-btn>.stop');
let tagDot;
let intervalID;

const SLIDE_LEN = tagSlideImg.length;
const IMG_WODTH = tagSlideImg[0].clientWidth;
const MOVE_TIME = 300;
let currentIdx = 0;

/***** PREV 버튼을 클릭했을 때 */
const handlerClickPrev = () => {
    currentIdx--;
    if( currentIdx >= -1 ){
        tagSlideList.style.transition = MOVE_TIME+'ms';
        tagSlideList.style.transform = `translateX(-${(currentIdx+1)*IMG_WODTH}px)`;
    }
    if( currentIdx === -1 ){        
        setTimeout( ()=>{
            tagSlideList.style.transition = '0ms';
            tagSlideList.style.transform = `translateX(-${SLIDE_LEN*IMG_WODTH}px)`;
        },MOVE_TIME);
        currentIdx = SLIDE_LEN-1;
    }     
    drawClickDot(tagDot[currentIdx]);
}
/***** NEXT 버튼을 클릭했을 때 */
const handlerClickNext = () => {   
    currentIdx++; 
    if( currentIdx <= SLIDE_LEN ) {
        tagSlideList.style.transition = MOVE_TIME+'ms';
        tagSlideList.style.transform = `translateX(-${(currentIdx+1)*IMG_WODTH}px)`;
    }
    if( currentIdx === SLIDE_LEN ) {
        setTimeout( ()=>{
            tagSlideList.style.transition = '0ms';
            tagSlideList.style.transform = `translateX(-${IMG_WODTH}px)`;
        } , MOVE_TIME );
        currentIdx = 0;
    }    
    drawClickDot(tagDot[currentIdx]);
}
const getChildIndex = (obj) => {
    const elem = obj.parentNode.childNodes;
    for( let i=0 ; i<elem.length ; i++ ) {
        if( elem[i] === obj ){
            return i;
        }
    }
    return -1;
}
const drawClickDot = (obj) => {
    const curDot = document.querySelector('.dot-active');
    curDot.classList.remove('dot-active');
    obj.classList.add('dot-active');
}
const handerClickDot = (event) => {
    let obj = event.target;
    drawClickDot(obj);
    // console.log( typeof obj.dataset.idx );
    // currentIdx = parseInt( obj.dataset.idx ); 
    // 
    currentIdx = getChildIndex( obj );
    if( currentIdx < 0 ) currentIdx = 0;
    tagSlideList.style.transition = MOVE_TIME+'ms';
    tagSlideList.style.transform = `translateX(-${(currentIdx+1)*IMG_WODTH}px)`;
}
const createElemDot = () => {
    let dotTag = '';
    for( let i=0 ; i<SLIDE_LEN ; i++ ){
        // dotTag += `<p class="dot" data-idx="${i}"></p>`;
        dotTag += `<p class="dot"></p>`;
    }
    const tagCircle = document.querySelector('.circle');
    tagCircle.innerHTML = dotTag;    
    tagDot = document.querySelectorAll('.dot');
    tagDot.forEach( (v,i) => {
        if( i===0 ){
            v.classList.add('dot-active');
        }
        v.addEventListener( 'click',handerClickDot );
    });
}
const cloneImageNode = () => {
    const firstNode = tagSlideList.firstElementChild;
    const lastNode = tagSlideList.lastElementChild;
    const cloneFirst = firstNode.cloneNode(true); /*1*/
    const cloneLast = lastNode.cloneNode(true);  /*5*/
    tagSlideList.appendChild(cloneFirst);
    tagSlideList.insertBefore( cloneLast, firstNode );
}
const handlerClickPlay = () => {
    intervalID = setInterval( handlerClickPrev , 1000 );
}
const handlerClickStop = () => {
    clearInterval(intervalID);
}
const init = () => {
    cloneImageNode();
    createElemDot();
    tagNext.addEventListener( 'click', handlerClickNext );
    tagPrev.addEventListener( 'click', handlerClickPrev );
    tagPlay.addEventListener( 'click', handlerClickPlay );
    tagStop.addEventListener( 'click', handlerClickStop );
}
init();