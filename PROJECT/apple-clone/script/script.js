const setCurrentScene = () => {
    yOffset = window.pageYOffset;
    let total = 0;
    for( let i=0 ; i<sceneInfo.length ; i++ ){
        total += sceneInfo[i].scrollHeight;
        if( total >= yOffset ){
            currentScene = i;
            break;
        }
    }
}
const handlerScroll = () => {
    yOffset = window.pageYOffset;
}
const setSecHeight = () => {
    for( let i=0 ; i<sceneInfo.length ; i++ ){
        sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;
        sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + 'px';
    }
    setCurrentScene();
}
const init = () => {
    //각각의 섹션의 height 설정
    setSecHeight();
    //초기화
    window.addEventListener('scroll',()=>{
        //스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함.
        handlerScroll();
    });
}

window.addEventListener('load',init);
window.addEventListener('resize',setSecHeight);
