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

    //upload image 
    $("#file").change(function(){
        UploadImg(this);
    });

    function UploadImg(input) {
        
        var files = input.files || input.currentTarget.files;
    
        var reader = [];
        var images = document.getElementById('imgs-wrap');
        var name;
        for (var i in files) {
            if (files.hasOwnProperty(i)) {
                name = 'file' + i;
                
                reader[i] = new FileReader();
                reader[i].readAsDataURL(input.files[i]);
                
                images.innerHTML += '<img id="'+ name +'" src="" />';
                
                (function (name) {
                    reader[i].onload = function (e) {
                        console.log(document.getElementById(name));
                        document.getElementById(name).src = e.target.result;
                    };
                })(name);
                
                
                console.log(files[i]);
            }
        }
    }

});