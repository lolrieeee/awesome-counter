(function() {

    'use strict';

    var i = 0;
    console.log(i)


    $('.add-score').on('click', function(){
        i = parseInt( $(this).parent('.player').children('.player-score').html() );
        if( i < 15 ) {
            i++;
            if ( i > 0 ) {
                $(this).parent('.player').children('.player-score').css('color', 'violet');
            }

            if ( i > 5 ) {
                $(this).parent('.player').children('.player-score').css('color', 'orange');
            }
            if ( i > 10) {
                $(this).parent('.player').children('.player-score').css('color', 'green');
            }
            $(this).parent('.player').children('.player-score').html(i);
            console.log(i);
        }
    });



    $('.minus-score').on('click', function(){
        i = parseInt( $(this).parent('.player').children('.player-score').html() );
        if ( i > 0 ) {
            i--;
            if ( i < 15 ) {
                $(this).parent('.player').children('.player-score').css('color', 'green');
            }

            if ( i < 10 ) {
                $(this).parent('.player').children('.player-score').css('color', 'orange');
            }
            if ( i < 5) {
                $(this).parent('.player').children('.player-score').css('color', 'violet');
            }
            $(this).parent('.player').children('.player-score').html(i);
            console.log(i);
        }
    });

}());
