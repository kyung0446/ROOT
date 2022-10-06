//전역변수
let yOffset = 0;  //window.pageYOffset 정보
let currentScene = 0;  //현재 활성화 된 section
const sceneInfo = [
    {//section-0
        heightCnt : 5,   //window.innerHeight 의 몇배로 height설정
        scrollHeight : 0,  
        objs : {
            container : document.querySelector('#scroll-section-0'),
            msgA : document.querySelector('#scroll-section-0 > .a'),
            msgB : document.querySelector('#scroll-section-0 > .b'),
            msgC : document.querySelector('#scroll-section-0 > .c'),
            msgD : document.querySelector('#scroll-section-0 > .d'),
        },
        values : {
            // msgA_opacity_in : [0,1,{start:0.2, end:0.3}],
            // msgA_position_in : [30,0,{start:0.2, end:0.3}],
            // msgA_opacity_out : [1,0,{start:0.3, end:0.4}],
            // msgA_position_out : [0,-30,{start:0.3, end:0.4}],
            msgA_opacity_in : [0,1],
            msgA_position_in : [30,0],
            msgA_opacity_out : [1,0],
            msgA_position_out : [0,-30],
        },
        imgCount : 117,
    },
    {//section-1
        heightCnt : 2,
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