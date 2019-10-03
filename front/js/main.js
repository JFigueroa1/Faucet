
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var address = $('.validate-input input[name="address"]');
    var quantity = $('.validate-input input[name="quantity"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(address).val().trim() == ''){
            showValidate(address);
            check=false;
            return check;
        }

        if($(quantity).val() > 4){
            showValidate(quantity);
            check=false;
            return check;
        }

        else {
            window.location.reload();
        }
    });


    $('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);