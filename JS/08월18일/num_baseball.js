
    'use strict';
    //변수선언
    // const arrRandom = '3146';
    let arrRandom = '';

    //객체 선택
    const tagForm = document.querySelector('form');
    const tagInput = document.querySelector('.input');
    const tagResult = document.querySelector('.result');
    
    tagForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        if( checkInput(tagInput.value) ){
            //입력값을 체크
            let str = checkValue(tagInput.value);
            tagResult.append( str );
            tagResult.append( document.createElement('br') );
        }
    });
    const analysisNumber = ()=>{
        let answer = '';   /* 4개의 랜덤한 숫자를 저장 */
        while( answer.length < 4 ){
            let temp = Math.floor(Math.random()*10);  /* 0~9*/
            // if( !answer.includes(temp) )
            if( answer.includes(temp) == false ){
                answer+=temp;
            }
        }
        console.log( answer );
        return answer;
    }
    const checkInput = (input) => {
        //길이가 4가인가?
        if( input.length !== 4 ){
            alert( '4자리 숫자를 입력하세요');
            return false;
        }
        return true;
    }
    const checkValue = (answer) => {
        let strike = 0;
        let ball=0;
        let out=0;
        for( let i=0 ; i<answer.length ; i++ ){
            const idx = arrRandom.indexOf( answer[i] );
            if( idx > -1 ){
                //일치하는 값이 있다.
                if( idx === i ) {
                    strike++;
                } else {
                    ball++;
                }
            } else {
                //일치하는 값이 없다.
                out++;
            }
        }    
        return ( `strike=${strike}  ball=${ball}  out=${out}`);
    }
    const init = () => {
        arrRandom = analysisNumber();
    }
    init();