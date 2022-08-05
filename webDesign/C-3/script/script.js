$(function(){
    //menu slide down/up
    $('.main-menu').mouseenter(function(){
        $(this).children('.sub-menu').stop().slideDown();
    });
    $('.main-menu').mouseleave(function(){
        $(this).children('.sub-menu').stop().slideUp();
    });

    //slide 좌/우 이동
    const TOTAL_IMAGE = 2;   /* 0,1,2*/
    let currentIndex = 0;
    let setPosition = 0;
    setInterval(function(){
        if( currentIndex < TOTAL_IMAGE ){
            currentIndex++;
        }else{
            currentIndex = 0;
        }
        setPosition = currentIndex*(-100)+'%';
        $('.slide-list').animate({left:setPosition},1000);
    },3000);

    //popupBox
    $('.modalOpen').click(function(){
        $('#modal').show();
    });
    $('#modal > a').click(function(){
        $('#modal').hide();
    });
});