const tagNav = document.querySelector('nav');
const navHeight = tagNav.clientHeight;
const handlerScroll = () => {
    let scroll = window.pageYOffset;
    // console.log( offsetTop );
    if( scroll > 50 ) {
        tagNav.style.top = '0px';
    } else {
        tagNav.style.top = `-${navHeight}px`;
    }
}
const init = ()=> {
    tagNav.style.top = `-${navHeight}px`;
    window.addEventListener('scroll',handlerScroll);
}
init();