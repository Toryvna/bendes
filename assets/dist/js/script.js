$(document).ready(function(){
    
    var slinky = $('.header .mainMenu').slinky({
        title: true,
        resize: false
    });
    
    //mobile menu
    $(document).mouseup(function(e){
        $('.toggle-menu').on('click', function () {
            $('.header__menu').addClass('show');
            $(this).addClass('active');
            $('.header__button').addClass('hide');
        });
        $('.toggle-menu.active').on('click', function () {
            $('.header__menu').removeClass('show');
            $(this).removeClass('active');
            $('.header__button').removeClass('hide');
            slinky.jump(".mainMenu>ul", false);
        });
    });
    //end mobile menu

    //show mobile socials
    $('.header__button').on('click', function(){
        $('.header__socials').toggleClass('show');
        $(this).toggleClass('active');
    });
    //end show mobile socials



    //lock,unlock body на телефоне
    var $docEl = $('html, body'),
    $wrap = $('body'),
    scrollTop;

    $.lockBody = function() {
        if(window.pageYOffset) {
        scrollTop = window.pageYOffset;
        
        $wrap.css({
            top: - (scrollTop)
        });
        }

        $docEl.css({
            height: "100%",
            overflow: "hidden"
        });
    }

    $.unlockBody = function() {
        $docEl.css({
            height: "",
            overflow: ""
        });

        $wrap.css({
            top: ''
        });

        window.scrollTo(0, scrollTop);
        window.setTimeout(function () {
            scrollTop = null;
        }, 0);

    }

    //call me back popup
    $('.open-callBack').on("click",function(){
        $('.overlay-callBack').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-callBack .closeBtn, .overlay-callBack .close').on("click",function(){
        $('.overlay-callBack').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end call me back popup

    //contacts popup
    $('.open-contacts').on("click",function(){
        $('.overlay-contacts').addClass('active');

        if($(window).width() < 768) {   
            $.lockBody();
        }else{
            $('body').css('overflow', 'hidden');
        }
    });
    $('.overlay-contacts .closeBtn, .overlay-contacts .close').on("click",function(){
        $('.overlay-contacts').removeClass('active');
        if($(window).width() < 768) {   
            $.unlockBody();
        }else{
            $('body').css('overflow', 'inherit');
        }
    });
    //end contacts popup


});


