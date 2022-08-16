(function(){
    'use strict';
    //객체 설정
    let displayCalc = '';
    const tagBtnWrap = document.querySelector('.button-wrap');
    const tagInput = document.querySelector('input');

    const updateDisplay = () => {
        tagInput.value = displayCalc;
    }
    const addDisplay = (text) => {
        displayCalc += text;
        updateDisplay();
    }
    const displayClear = () => {
        displayCalc = '';
        updateDisplay();
    }
    const calc = () => {
        // console.log( displayCalc );
        let value = eval( displayCalc );
        displayCalc += '=';
        displayCalc += value;
        updateDisplay();
    }

    const onBtnClick = (event) => {
        // console.dir( event.target );
        let type = event.target;
        switch(type.className){
            case 'ac' :
                //입력된 계산식을 초기화
                displayClear();
                break;
            case 'equals' :
                //입력된 계산식을 계산
                calc();
                break;
            default :
                //textContent 를 읽어와서 결합
                addDisplay(type.textContent);
                break;
        }        
    }
    tagBtnWrap.addEventListener('click',onBtnClick)
})();


