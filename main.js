$( ".rate" ).on( "click", function() {
    let num = $(this).text();
    $(this).siblings('.rate').removeClass('clicked');
    $(this).addClass('clicked');
} );
$( ".submit" ).on( "click", function() {
    let rate = $('.clicked');
    if (rate.length !== 0) {
        let num = rate.text();
        $('.card-component').hide();
        $('.thank-you-component').css('display','flex');
        $('#selected').text(num);
    }
} );
