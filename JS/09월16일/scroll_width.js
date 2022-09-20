
//스크롤 이벤트 처리
const handlerScroll = (barElem) => {
    const totalHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;  //100vh
    // const scrollY = window.pageYOffset || window.scrollY;
    const scrollY = document.documentElement.scrollTop;
    // if( totalHeight - Math.floor(scrollY) === clientHeight ) {
    //     console.log( '---------- 여기가 끝입니다. -----------');
    // }
    const maxScrollH = totalHeight - clientHeight;
    const percent = ( scrollY / maxScrollH ) * 100;
    console.log( percent );
    barElem.style.width = percent+'%';
}
//프로그램 시작
const init = () =>{
    const tagBar = document.querySelector('#scroll-bar');
    window.addEventListener('scroll',()=>{
        handlerScroll(tagBar);
    });
}
window.addEventListener('load',init);