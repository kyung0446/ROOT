
(function(){
    'use strict';
    let itemList = [];
    // let itemList = new Array();
    /** 객체 가져오기 */
    const tagBtn = document.querySelector('#add');
    const tagUl = document.querySelector('#itemList');
    // tagBtn.onclick = addBtnClick;
    tagBtn.addEventListener( 'click', addBtnClick );
    
    function addBtnClick(){
        let value = document.querySelector('#item').value;
        document.querySelector('#item').value = "";
        if( value ) {
            itemList.push(value);
        }        
        showList();
    }
    function showList(){
        let strTag = '';
        for( let i=0 ; i<itemList.length ; i++ ){
            strTag += `<li id=${i} class=close>`;
            strTag += itemList[i];
            strTag += '<span>X</span>';
            strTag += '</li>';
        }
        tagUl.innerHTML = strTag;
        clickRemove();
    }    
    function clickRemove(){
        let obj = document.querySelectorAll( '.close' );
        for( let i of obj ){
            i.addEventListener('click',removeList );
        }
    }
    function removeList(){
        let idx = this.getAttribute('id');
        itemList.splice(idx,1);
        showList();
    }
})();