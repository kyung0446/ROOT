$(function(){
    //마우스가 올려졌을 때
    $('.main-menu').mouseenter(function(){
        $(this).children('.sub-menu').stop().slideDown();
    });
    //마우스가 벗어났을 때
    $('.main-menu').mouseleave(function(){
        $(this).children('.sub-menu').stop().slideUp();
    });
    
    //slide fade in/out
    const TOTAL_IMAGE = 2;
    let currentIndex = 0;
    //첫번째 이미지의 fade in
    $('.slide-list li').eq(currentIndex).fadeIn(800);
    //3초에 한번씩 실행
    setInterval(function(){
        if( currentIndex < TOTAL_IMAGE ){
            currentIndex++;
        } else{
            currentIndex = 0;
        }
        $('.slide-list li').fadeOut(800);
        $('.slide-list li').eq(currentIndex).fadeIn(800);
    },3000);

    //tab menu click 시
    $('.tab-menu li').click(function(){
        //tab menu change
        $('.tab-menu li').removeClass('on');
        $(this).addClass('on');
        //tab item view
        let pos = $(this).index();
        $('.tab-item ul').hide().removeClass('on');
        $('.tab-item ul').eq(pos).show().addClass('on');
    });

    //공지사항 popup open
    $('.popOpen').click(function(){
        $('#popBox').show();
    });
    //공지사항 popup close
    $('#popBox a').click(function(){
        $('#popBox').hide();
    });
});