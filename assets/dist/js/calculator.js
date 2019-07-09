$(document).ready(function(){

    jcf.replaceAll();
    
    
    //increment and decrement buttons
    if($(".inc_dec_btn.dec").val() < 1 ){
        $(".inc_dec_btn.dec").addClass('hide');
    }
    $(".inc_dec_btn").on("click", function () {
        var $button = $(this);
        var input = $button.parent().find("input");
        var value = parseInt($button.parent().find("input").val());

        $(this).parent().find(".inc_dec_btn.dec").removeClass('hide');

        if ($button.hasClass('inc')) {
            value = value + 1;
            input.removeClass('error');
            
        } else {
            if (value > 1) {
                var value = parseFloat(value) - 1;
                input.removeClass('error');
            } else {
                $(this).addClass('hide');
                value = 0;
                input.addClass('error');
            }
        }

        $button.parent().find("input").val(value);
    });

    //check weight
    $('.weight input').on("input", function() {
        var dInput = parseFloat($(this).val());
        var maxValue = parseFloat($(this).attr('max'));
        if(dInput > maxValue){
            $(this).addClass('error');
        }else{
            $(this).removeClass('error');
        }
    });

    //show/hidden all prices
    $(".showAll").on('click', function(){
        $(this).toggleClass('active');
        $(this).parent().parent().find('.hiddenInfo').toggleClass('active');
    });

    $('.showOptions').on('click', function(){
        $(this).hide();
        $('.primeCost').addClass('active');
    });

    $('.hideBlk').on('click', function(){
        $('.showOptions').show();
        $('.primeCost').removeClass('active');
    });

    //show/hide discount info
    $(".applyDiscount").on('click', function(){
        $(this).hide();
        $('.discount__info').addClass('show');
    });
    $('.viewPrice').on("input", function(){
        $('.resetDiscount').addClass('show');
        $('.calculator__cost .result').addClass('withDiscount');
    });
    $(".resetDiscount").on('click', function(){
        $('.applyDiscount').show();
        $('.discount__info').removeClass('show');
        $('.calculator__cost .result').removeClass('withDiscount');
    });



    //upload image 
    function readURL(input) {
        var img = $('<img>'); 
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                img.attr('src', e.target.result);
                img.appendTo('#imgs-wrap');
            }
            reader.readAsDataURL(input.files[0]);
            $('.addingPhotos-blk').hide();
            $('.addingPhotos').show();
        }
    }
    $("#file").change(function(){
        readURL(this);
    });

    $('.addingPhotos').on('click', function(){
        $('.addingPhotos-blk').show();
        $(this).hide();
    });

});