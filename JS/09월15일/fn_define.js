const handlerScroll = () => {
    let scroll = window.pageYOffset;
    // console.log( offsetTop );
    if( scroll >= offsetTop ) {
        tagNav.classList.add('fixed');
    } else {
        tagNav.classList.remove('fixed');
    }
}