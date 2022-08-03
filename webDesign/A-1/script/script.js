$(
    function(){
        //메뉴 슬라이드
        $('.subMenu').slideUp(0);
        // $('nav').hover(
        //     //over
        //     function(){
        //         $('.subMenu').stop().slideDown('fast');
        //     },
        //     //out
        //     function(){
        //         $('.subMenu').stop().slideUp('fast');
        //     }
        // );
        $('.mainMenu').hover(
            //over
            function(){
                $(this).children('.subMenu').stop().slideDown('fast');
            },
            //out
            function(){
                $(this).children('.subMenu').stop().slideUp('fast');
            }
        );

        //상하 슬라이드
        const TOTAL_IMAGE = 2;  
        let currentIndex = 0;  /* 0,1,2*/
        let slidePos = 0;
        setInterval(loopSlide,3000);
        function loopSlide(){
            if( currentIndex < TOTAL_IMAGE ) {
                currentIndex++;
            } else{
                currentIndex = 0;
            }
            // currentIndex = (currentIndex==TOTAL_IMAGE) ? 0 : ++currentIndex;
            slidePos = currentIndex*(-300)+'px';
            $('.slide-list').animate({top:slidePos},1000);
        }

        //tab menu
        $('.tabMenu li').click(function(){
            let pos = $(this).index();
            $('.tabItem ul').hide().removeClass('on');
            $('.tabItem ul').eq(pos).show().addClass('on');
            //
            $('.tabMenu li').removeClass('on');
            $(this).addClass('on');
        });

        //popBox
        $('.notice li:first-child').click(function(){
            // $('.popBox').show();
            $('.popBox').fadeIn('fast');
        });
        $('.popBox a').click(function(){
            // $('.popBox').hide();
            $('.popBox').fadeOut('fast');
        });
    }
);