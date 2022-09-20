const tagNav = document.querySelector('nav');
// const offsetTop = tagNav.getBoundingClientRect().top;
const offsetTop = tagNav.offsetTop;
const handlerScroll = () => {
    let scroll = window.pageYOffset;
    // console.log( offsetTop );
    if( scroll >= offsetTop ) {
        tagNav.classList.add('fixed');
    } else {
        tagNav.classList.remove('fixed');
    }
}
const init = ()=> {
    window.addEventListener('scroll',handlerScroll);
}
init();