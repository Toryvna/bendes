$(document).ready(function(){

    //переключение фото по клику на маленькие картинки
    $('.small-image').on('click', function () {
        var src = $(this).find('img').attr('src');
        $(this).parent().find('.small-image').removeClass('active');
        $(this).addClass('active');
        $('.main-photo').attr('src', src);
    });
    
    //increment and decrement buttons
    if($(".inc_dec_btn.dec").val() < 1 ){
        $(".inc_dec_btn.dec").addClass('hide');
    }
    $(".inc_dec_btn").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        $(".inc_dec_btn").removeClass('hide');

        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 2) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                $(this).addClass('hide');
                newVal = 1;
            }
        }

        $button.parent().find("input").val(newVal);
    });

});