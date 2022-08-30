const tagNext = document.querySelector('.slide-btn > .next');
const tagPrev = document.querySelector('.slide-btn > .prev');
const tagSlideList = document.querySelector('.slide-list');
const tagSlideImg = document.querySelectorAll('.slide-list>img');
let tagDot;

const SLIDE_LEN = tagSlideImg.length;
const IMG_WODTH = tagSlideImg[0].clientWidth;
let currentIdx = 0;

/***** PREV 버튼을 클릭했을 때 */
const handlerClickPrev = () => {
    currentIdx--;
    if( currentIdx <= 0 ) {
        tagPrev.setAttribute('disabled','true');
    }
    tagNext.removeAttribute('disabled');   
    tagSlideList.style.transform = `translateX(-${currentIdx*IMG_WODTH}px)`; 
    drawClickDot(tagDot[currentIdx]);
}
/***** NEXT 버튼을 클릭했을 때 */
const handlerClickNext = () => {   
    currentIdx++; 
    if( currentIdx === SLIDE_LEN-1 ){
        tagNext.setAttribute('disabled','true');
    }
    tagPrev.removeAttribute('disabled');
    tagSlideList.style.transform = `translateX(-${currentIdx*IMG_WODTH}px)`;
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
    tagSlideList.style.transform = `translateX(-${currentIdx*IMG_WODTH}px)`;
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
const init = () => {
    createElemDot();
    tagNext.addEventListener( 'click', handlerClickNext );
    tagPrev.addEventListener( 'click', handlerClickPrev );
    tagPrev.setAttribute('disabled','true');
}
init();