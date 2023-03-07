$(document).ready(function(){



    $(window).scroll(function(){

        $( '.navbar-nav a' ).on('click',
        function () {
        $( '.navbar-nav' ).find( 'li.active' )
            .removeClass( 'active' );
        $( this ).parent( 'li' ).addClass( 'active' );
        });



        let getscrollpoint = $(this).scrollTop();
        console.log(getscrollpoint);

        if(getscrollpoint >= 20){
            $('.hometext').addClass('fromtops');
            $('.homeimg').addClass('frombottoms');
        }else{
            $('.hometext').removeClass('fromtops');
            $('.homeimg').removeClass('frombottoms');
        }

        if(getscrollpoint >= 230){
            $(".aboutimg").addClass("fromcentolefts");
            $(".aboutext").addClass("fromcentorights");
        }else  {
            $(".aboutimg").removeClass("fromcentolefts");
            $(".aboutext").removeClass("fromcentorights");
        }
        

        
       

        if(getscrollpoint >= 650){
            $('.popularcard1').addClass('fromtops');
            $('.popularcard2').addClass('fromtops');
            $('.popularcard3').addClass('fromtops');
        }else {
            $('.popularcard1').removeClass('fromtops');
            $('.popularcard2').removeClass('fromtops');
            $('.popularcard3').removeClass('fromtops');
        }
        

        
        if(getscrollpoint >= 1050){
            $('.recentext').addClass('fromlefts');
            $('.recentimg').addClass('fromrights');
        }else{
            $('.recentext').removeClass('fromlefts');
            $('.recentimg').removeClass('fromrights');
        }


        
        if(getscrollpoint >= 2030){
            $('.footer').addClass('footerani');
        }else{
            $('.footer').removeClass('footerani');
        }

        
});
});





