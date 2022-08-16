(function(){
    'use strict';
    /*** 변수 */
    // const modal = confirm("몇 명이 참가하나요?");
    const MAX = Number( prompt("몇 명이 참가하나요?") ); /* basic 3 */
    const tagInput = document.querySelector('input');
    const tagBtn = document.querySelector('button'); 
    const tagOrder = document.querySelector('.order');   
    const tagWord = document.querySelector('.word');
    const tagHistyory = document.querySelector('#history');
    let preWord = '';
    let inputWord = '';
    let arrWord = [];

    /***   함수 정의  ***/
    function onInputKeypress(event){
        // if( event.keyCode === 13 ){
        //     event.preventDefault();  /* 태그 기본 속성을 초기화 */
        // }
        if( event.key === 'Enter' ){
            event.preventDefault();
            onBtnClick();
        }
    }
    function onTextInput(event){
        // console.log( event.target.value );
    }
    function onBtnClick(){        
        preWord = inputWord; 
        if( tagInput.value ){            
            //단어가 들어가 있는 상태
            if( !preWord || preWord[preWord.length-1] === tagInput.value[0] ){
                inputWord = tagInput.value;

                let number = Number(tagOrder.textContent);
                // if( number+1 > MAX ) {
                //     tagOrder.textContent = 1;
                // } else {
                //     tagOrder.textContent = number+1;
                // }
                tagOrder.textContent = (number+1>MAX) ? 1 : number+1;
                tagWord.textContent = inputWord;

                //history 등록
                // let text = tagHistyory.textContent;
                // tagHistyory.textContent = (text) ? text+' => '+inputWord : inputWord;
                arrWord.push(inputWord);
                let viewText = '';
                for( let text of arrWord ){
                    viewText += text+'=>';
                }
                tagHistyory.textContent = viewText;
            }else{
                alert('올바르지 않은 단어입니다');
            }
        }else{
            //단어가 들어가 있지 않는 상태, 빈단어
            alert('올바르지 않은 단어입니다');
        }
        tagInput.value = '';
        tagInput.focus();
    }
    /*****************  */
    
    tagInput.focus();
    tagInput.addEventListener('keypress', onInputKeypress);
    tagInput.addEventListener('input',onTextInput );
    tagBtn.addEventListener('click',onBtnClick);
})();