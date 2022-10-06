//전역변수
let yOffset = 0;  //window.pageYOffset 정보
let currentScene = 0;  //현재 활성화 된 section
const sceneInfo = [
    {//section-0
        heightCnt : 5,   //window.innerHeight 의 몇배로 height설정
        scrollHeight : 0,  
        objs : {
            container : document.querySelector('#scroll-section-0'),
        }  
    },
    {//section-1
        heightCnt : 3,
        scrollHeight : 0,
        objs : {
            container : document.querySelector('#scroll-section-1'),
        }  
    },
    {//section-2
        heightCnt : 4,
        scrollHeight : 0,
        objs : {
            container : document.querySelector('#scroll-section-2'),
        }  
    },
    {//section-3
        heightCnt : 5,
        scrollHeight : 0,
        objs : {
            container : document.querySelector('#scroll-section-3'),
        }  
    },
];