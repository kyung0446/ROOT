//객체가져오기
const tagSec = document.querySelectorAll('section');
const tagMenu = document.querySelector('nav');
const secPos = [];

const saveSectionPos = () => {
    tagSec.forEach( (elem,idx) => {
        secPos[idx] = elem.offsetTop - (window.innerHeight*0.5);
    });
    secPos[tagSec.length] = document.documentElement.scrollHeight;
}
const setMenuActive = (idx) => {
    const prevObj = document.querySelector('.active');
    prevObj.classList.remove('active');
    tagMenu.children[idx].classList.add('active');
}
const handlerScroll = ()=>{
    const scroll = window.pageYOffset;
    tagSec.forEach( (elem,idx) => {
        if( scroll>=secPos[idx] && scrollY < secPos[idx+1] ) {
            setMenuActive(idx);
        }
    });
}
const init = () => {
    saveSectionPos();
    window.addEventListener('scroll',handlerScroll);
}
window.addEventListener('load',init);