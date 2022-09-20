
//스크롤 이벤트 발생
const tagFixed = document.querySelector("#fixed");
const tagBox = document.querySelector('#box');
const handlerScroll = () => {
    // console.log( '*** scroll event ***' );
    //얼마나 스크롤이 되었는지를 픽셀 단위로 반환
    // tagFixed.textContent = window.pageYOffset;
    // tagFixed.textContent = tagBox.offsetTop;
    tagFixed.textContent = tagBox.getBoundingClientRect().top;
    let box_offsetY = tagBox.getBoundingClientRect().top;
    if( box_offsetY < 10 ){
        tagBox.classList.add('zoomin');
    } else {
        tagBox.classList.remove('zoomin');
    }

};
window.addEventListener("scroll", handlerScroll);
