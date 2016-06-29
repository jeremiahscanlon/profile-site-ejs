
$(document).ready(function() {

    console.log('loaded!');
    $(".button-collapse").sideNav();
    $('.parallax').parallax();

    // function handleShowrClick(arr){
    //     $( '#'+arr ).removeClass( 'bounceOutUp' ).addClass( 'bounceInDown' ).show();
    //     $( '#showr'+arr ).hide();
    //     $( '#hidr'+arr ).show();
    // }
    //
    // function handleHidrClick(arr){
    //     $( '#'+arr ).removeClass( 'bounceInDown' ).addClass( 'bounceOutUp' );
    //     $( '#hidr'+arr ).hide();
    //     $( '#showr'+arr ).show();
    // }
    //
    // var areas = ['Top', 'Bottom', 'Right', 'Left'];
    //
    // for (i=0; i < areas.length; i++) {
    //     console.log('#showr'+areas[i]);
    //     $( '#showr'+areas[i] ).click( handleShowrClick(areas[i]) );
    //     $( '#hidr'+areas[i] ).click( handleHidrClick(areas[i]) );
    // }

});
