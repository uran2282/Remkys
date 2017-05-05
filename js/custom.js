



$(document).ready(function(){
    $('.toggle').click(function(){
        if(!$('.menu').hasClass('open')){
            $('.menu').addClass('open');
            return false;
        }
    });

    $(document).click(function(event) {
        if($('.menu').hasClass('open')){
            if ($(event.target).closest(".menu").length){return;} 
            $('.menu').removeClass('open');
            return false;
        }
    });

    $(document).scroll(function(event) {
        $('.menu').removeClass('open');
    });


    $( ".alert_btn" ).click(function() {
      alert_function();
    });
    function alert_function(){ 
        $( ".alert_fixed" ).addClass( "hide" );
    }
});



