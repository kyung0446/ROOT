//객체 가져오기
const tagWrapper = document.querySelector('#wrapper');
const tagBg = tagWrapper.querySelectorAll('.bg');
const tagTown = tagWrapper.querySelectorAll('.town > img');
const tagSun = tagWrapper.querySelector('.sky .sun');
const tagMoon = tagWrapper.querySelector('.sky .moon');

const setBackground = (index) => {
    // tagBg.forEach( (elem)=> {
    //     elem.classList.remove('active');
    // });
    const obj = tagWrapper.querySelector('.active');
    obj.classList.remove('active');
    tagBg[index].classList.add('active');
}

const setTownView = (index) => {
    const obj = tagWrapper.querySelector('.townview');
    obj.classList.remove('townview');
    tagTown[index].classList.add('townview');
}

const setSunView = (index) => {  //-3,-1,1,3
    //-90 , -30 , 30 , 90
    const arrPos = [-90,-30,30,90];
    // const pos = index * 30;
    if( Math.abs(arrPos[index]) === 90 ) {
        tagSun.style.opacity = '0';
    }else {
        tagSun.style.opacity = '1';
    }
    tagSun.style.transform = `rotate(${arrPos[index]}deg)`;
}

const setMoonView = (index) => {
    if( index ) {
        tagMoon.classList.add('show');
    } else {
        tagMoon.classList.remove('show');
    }
}

const changeBackground = (percent) => {
    if( percent < 25 ) {
        setBackground(0);
        setTownView(0);
        setSunView(0);
        setMoonView(0);
    } else if( percent >=25 && percent < 50 ) {
        setBackground(1);
        setTownView(0);
        setSunView(1);
        setMoonView(0);
    } else if( percent >=50 && percent < 75 ) {
        setBackground(2);
        setTownView(1);
        setSunView(2);
        setMoonView(0);
    } else if( percent >=75 && percent < 100 ){
        setBackground(3);
        setTownView(1);
        setSunView(3);
        setMoonView(1);
    }
}

//함수 정의
const handlerScroll = ()=>{
    /*
    전체 스크롤에 대한 현재 위치값을 퍼센트로 표시
    percent < 25 : sky1
    25 <= percent < 50 : sky2
    50 <= percent < 75 : sky3
    75 <= percent < 100 : sky4               
    */
   let totalHeight = tagWrapper.offsetHeight;
   let scrollTop = window.pageYOffset;
   let scrollPercent = (scrollTop / (totalHeight-window.innerHeight))*100;
   let percent = Math.floor(scrollPercent);
   changeBackground( percent );
}
const init = ()=>{
    window.addEventListener('scroll',handlerScroll);
}
window.addEventListener('load',init);