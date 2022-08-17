(function(){
    'use strict';
    const tagNumber = document.querySelectorAll('.num');
    const tagOp = document.querySelectorAll('.op');
    const tagAc = document.querySelector('.ac');
    const tagEquals = document.querySelector('.equals');
    const tagInput = document.querySelector('input');
    let num1='';
    let num2='';
    let op='';
    let inputCalc = '';
    let isChange = false;
    //함수 정의
    const displayCalc = (text) => {
        inputCalc += text;
        tagInput.value = inputCalc;
    }
    const changeNumber = (result) => {
        num1 = inputCalc = '' + result;
        num2 = op = '';
        isChange = true;
    }
    const onClickNumber = (event) => {
        // console.log( 'number click=>', event.target.textContent);
        if( op && num1 ){
            //있다면 num2
            num2 += event.target.textContent;
        } else {
            //없다면 num1
            if( isChange ) {
                //변경이 된 상태
                onClickAC();
                isChange = false;
            }
            op = '';
            num1 += event.target.textContent;
        }
        displayCalc(event.target.textContent);
        // console.log( `num1=${num1}   num2=${num2}   op=${op}`);
    }
    const onClickOperator = (event) => {
        // console.log( 'op click=>', event.target.textContent);
        if( num1 ){
            //있는 상태
            if( op ) {
                //이미 연산자가 있는 상태
                onClickEquals();
            }
            op += event.target.textContent;
            displayCalc(event.target.textContent);
            isChange = false;
        } else{
            alert("숫자를 먼저 입력하세요");
        }
        // console.log( `num1=${num1}   num2=${num2}   op=${op}`);
    }
    const onClickAC = () => {
        inputCalc=num1=num2=op='';
        displayCalc('');        
    }
    const onClickEquals = () => {
        if( num2 ){
            //있다면 계산
            let value1 = parseInt(num1);
            let value2 = parseInt(num2);
            let result=0;
            switch(op) {
                case '+' : result = value1 + value2;
                    break;
                case '-' : result = value1 - value2;
                    break;
                case '*' : result = value1 * value2;
                    break;
                case '/' : 
                    result = value1 / value2;
                    result = result.toFixed(2);
                    break;
                default :
                    alert('수식을 다시 입력하세요');
                    onClickAC();
                    return false;
            }
            displayCalc( '='+result );
            changeNumber(result);
        } else {
            //
            alert('숫자를 입력하세요');
            onClickAC();
        }
    }
    //이벤트 등록
    // for( let obj of tagNumber ){
    //     obj.addEventListener('click',onClickNumber);
    // }
    tagNumber.forEach( obj=>obj.addEventListener('click',onClickNumber ) );
    tagOp.forEach( obj => obj.addEventListener('click', onClickOperator) );
    tagAc.addEventListener('click',onClickAC);
    tagEquals.addEventListener('click',onClickEquals);
})();


