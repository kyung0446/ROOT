$(function(){
    /***** modal popup ******/
    $('.modalOpen').click(function(){
        $('.modal').show();
    });
    $('.modal>button').click(function(){
        $('.modal').hide();
    });

    //좌,우 슬라이드 
    const TOTAL_IMAGE = 2;
    let currentIndex = 0;
    let setPosition = 0;
    setInterval(function(){
        if( currentIndex < TOTAL_IMAGE ){
            currentIndex++;
        } else{
            currentIndex = 0;
        }
        setPosition = currentIndex*(-1200)+'px';
        $('.slide-list').animate({left : setPosition},1000);
    },3000);

    //menu slide down/up
    $('.main-menu').mouseenter(function(){
        $('.sub-menu, .menu-bg').stop().slideDown();
    });
    $('.main-menu').mouseleave(function(){
        $('.sub-menu, .menu-bg').stop().slideUp();
    });
});