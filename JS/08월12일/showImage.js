//즉시 실행 함수
(function(){
    'use strict';
    /* 객체를 가져오는 변수 */
    const tagImg = document.querySelectorAll('.small-wrap>img');
    const tagBig = document.querySelector('.big-wrap>img');
    const prevBtn = document.querySelector('.big-btn>button:first-child');
    const nextBtn = document.querySelector('.big-btn>button:last-child');
    const MAX = tagImg.length;
    console.log( `max = ${MAX}`);
    let currentIdx=0;
    
    

    /* 큰 이미지를 변경하는 함수 */
    const smallImgClick = function(){
        //클릭이 되면
        showBigImage(this);
    }
    const showBigImage = function(obj){
        // console.log( this.getAttribute('src') );  //window
        let path = obj.getAttribute('src');
        tagBig.setAttribute('src',path);
        showImgBorder(obj);
    }
    /* 작은 이미지의 테두리를 만드는 함수 */
    const showImgBorder = function(obj){
        for( let elemImg of tagImg ) {
            elemImg.style.outline = 'none';
        }
        obj.style.outline = '2px solid blue';
    }

    /* 이벤트 등록 */
    
    for( let elemImg of tagImg ) {
        elemImg.onclick = smallImgClick;
    }
    showImgBorder(tagImg[currentIdx]);
    prevBtn.addEventListener('click',function(){
        // console.log( 'prevBtn click');
        if( currentIdx <=0 ){
            currentIdx = 0;
        } else{
            currentIdx--;
        }
        // let path = tagImg[currentIdx].getAttribute('src');
        // tagBig.setAttribute('src',path);
        showBigImage(tagImg[currentIdx]);
    });
    nextBtn.addEventListener('click',function(){
        // console.log( 'nextBtn click');
        if( currentIdx < MAX-1 ) {
            currentIdx++;
        }else{
            currentIdx = MAX-1;
        }
        // let path = tagImg[currentIdx].getAttribute('src');
        // tagBig.setAttribute('src',path);
        showBigImage(tagImg[currentIdx]);
    });
})();



