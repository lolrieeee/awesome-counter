(function() {

    'use strict';

    var i = 0;
    console.log(i)


    $('.add-score').on('click', function(){
        i = parseInt( $(this).parent('.player').children('.player-score').html() );
        if( i < 15 ) {
            i++;
            if ( i > 0 && i < 15 ) {
                $(this).parent('.player').children('.player-score').css('color', 'violet');
                document.getElementById('point-gain').play();
            }

            if ( i > 5 && i < 15) {
                $(this).parent('.player').children('.player-score').css('color', 'orange');
                document.getElementById('point-gain').play();
            }
            if ( i > 10 && i < 15 ) {
                $(this).parent('.player').children('.player-score').css('color', 'green');
                document.getElementById('point-gain').play();
            }
            if ( i == 15 ) {
                $(this).parent('.player').children('.player-score').css('color', 'blue');
                document.getElementById('winner').play();
            }
            $(this).parent('.player').children('.player-score').html(i);
            console.log(i);
        }
    });



    $('.minus-score').on('click', function(){
        i = parseInt( $(this).parent('.player').children('.player-score').html() );
        if ( i > 0 ) {
            i--;
            if ( i < 15 && i !== 0 ) {
                $(this).parent('.player').children('.player-score').css('color', 'green');
                document.getElementById('point-loss').play();
            }

            if ( i < 10 && i !== 0 ) {
                $(this).parent('.player').children('.player-score').css('color', 'orange');
                document.getElementById('point-loss').play();
            }
            if ( i < 5 && i !== 0 ) {
                $(this).parent('.player').children('.player-score').css('color', 'violet');
                document.getElementById('point-loss').play();
            }

            if ( i === 0 ) {
                document.getElementById('zero').play();
            }
            $(this).parent('.player').children('.player-score').html(i);
            console.log(i);

        }
    });


}());
