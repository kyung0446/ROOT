const MAX_MARGIN = 300;
const tagBox = document.querySelectorAll('section div');

const handerScroll = ()=>{
    tagBox.forEach( (elem) => {
        const boxTop = elem.getBoundingClientRect().top;
        if( window.innerHeight > boxTop+MAX_MARGIN ){
            elem.classList.add('show');
        }
    });
}
const init = ()=>{
    window.addEventListener('scroll',handerScroll);
}
window.addEventListener('load',init);