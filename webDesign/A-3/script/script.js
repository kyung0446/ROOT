$(function(){
    $('.main-menu').mouseenter(function(){
        // $('.sub-menu').stop().slideDown();
        // $(this).children('.sub-menu').stop().slideDown();
        $('.sub-menu, .menu-bg').stop().slideDown();
    });
    $('.main-menu').mouseleave(function(){
        // $('.sub-menu').stop().slideUp();
        // $(this).children('.sub-menu').stop().slideUp();
        $('.sub-menu, .menu-bg').stop().slideUp();
    });

    //tab menu
    $('.tab-item > .gallery').hide();
    $('.tab-menu > h3').click(function(){
        $('.tab-menu > h3').removeClass('on');
        $(this).addClass('on');

        let idx = $(this).index();
        $('.tab-item > ul').hide().removeClass('on');
        $('.tab-item > ul').eq(idx).show().addClass('on');
    });
});