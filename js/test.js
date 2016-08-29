$(document).ready(function(){
    //hide small screen navigation on page load
    $(".nav_small-screen").hide();
    
    $(".toggle").click(function(){
        //show and hide small screen navigation if you click on toggle button
        $(".nav_small-screen").toggle();
        
        //test to see if toggle is on or off
        checkToggle();
    });
    
    function checkToggle(){
        if ($(".nav_small-screen").is(":visible")){
            //if small screen nav is visible, disable scrolling
            $('body').css('overflow','hidden');
            //If user resized window and made small again, go to top of page so small nav is in same place
            window.scrollTo(0, 0);
        } else{
            //if small screen nav is NOT visible, make scrolling available
            $('body').css('overflow','visible');
        }
    }
    
    function checkWidth(){
        //get window width
        var width = $(window).width(); 

        if ((width >= 768 )) {
            //if width is over 768, small nav can not be visibile so scroll must be possible
            $('body').css('overflow','visible');
        }
    }
    
    //Check page width
    checkWidth();
    
    //Check page width dynamically, always checking to see if toggle is visible before width
    $(window).resize(checkToggle);
    $(window).resize(checkWidth);
});