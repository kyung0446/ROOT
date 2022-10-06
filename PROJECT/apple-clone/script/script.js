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
const setSecHeight = () => {
    for( let i=0 ; i<sceneInfo.length ; i++ ){
        sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;
        sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + 'px';
    }
    setCurrentScene();
}
const calc_values = (values,ratio) => {
    let calc=0;
    calc = ratio*(values[1]-values[0])+values[0];
    return calc;
}
const sectionAniPlay = (prevHeight) => {
    const currentYOffset = yOffset - prevHeight;
    let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight;
    //
    const tagObjs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    switch( currentScene ) {
        case 0 :  //section-0 
            if( scrollRatio <= 0.2 ) {
                tagObjs.msgA.style.opacity = calc_values(values.msgA_opacity_in, scrollRatio);
            } else{
                tagObjs.msgA.style.opacity = calc_values(values.msgA_opacity_out, scrollRatio);
            }
            break;
        case 1 :  //section-1
            break;
        case 2 :  //section-1
            break;
        case 3 :  //section-1
            break;
    }
}
const handlerScroll = () => {
    yOffset = window.pageYOffset;
    //스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함.
    let prevHeight = 0;
    for( let i=0 ; i<currentScene ; i++ ){
        prevHeight += sceneInfo[i].scrollHeight;
    }
    if( yOffset > prevHeight + sceneInfo[currentScene].scrollHeight ){
        currentScene++;
    }
    if( yOffset < prevHeight ) {
        currentScene--;
    }
    document.body.setAttribute('id',`show-section-${currentScene}`);
    sectionAniPlay(prevHeight);
}
const init = () => {
    //각각의 섹션의 height 설정
    setSecHeight();
    //초기화
    window.addEventListener('scroll',()=>{
        handlerScroll();
    });
}

window.addEventListener('load',init);
window.addEventListener('resize',setSecHeight);
