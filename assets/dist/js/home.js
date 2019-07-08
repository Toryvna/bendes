$(document).ready(function(){
    
    //Tabs
    $('.tab-item1').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.tab-item1').removeClass('active');
        $('.body-item1').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
        InitProdSlider(dataTab);
    });
    
    $('.tab-item2').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.tab-item2').removeClass('active');
        $('.body-item2').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
        InitProdSlider(dataTab);
    });
    
    $('.tab-item3').on('click', function(){
        var dataTab = $(this).data('tab');
        $('.tab-item3').removeClass('active');
        $('.body-item3').removeClass('active');
        
        $(this).addClass('active');
        $('.' + dataTab).addClass('active');
        InitProdSlider(dataTab);
    });

    //sliders
    function InitProdSlider(item){
        var prodSlider = new Swiper('.' + item + ' .products__slider', {
            slidesPerView: 3,
            spaceBetween: 60,
            navigation: {
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            },
            breakpoints: {
                1600: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    navigation: {
                      nextEl: '.swiper-next',
                      prevEl: '.swiper-prev',
                    },
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
            }
        });
    }
    InitProdSlider('tab-content1');
    InitProdSlider('tab-content4');
    InitProdSlider('tab-content7');


    
    var prodSlider = new Swiper('.reviews_slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
    });

    
});