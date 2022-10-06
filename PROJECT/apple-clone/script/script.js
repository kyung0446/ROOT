
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
    console.log( currentScene );
}
const init = () => {
    //각각의 섹션의 height 설정
    setSecHeight();
    //초기화
    window.addEventListener('scroll',handlerScroll);
}
window.addEventListener('load',init);