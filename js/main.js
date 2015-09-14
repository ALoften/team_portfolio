$(document).ready(function(){






/* ---- CUSTOM SLIDER YO! ---- */
    var slide;
   	var sliderPause = false;
    
    $(".sliderOuterContainer").each(function(){
        slide = $(this).find(".sliderCarouselItem:last-child").clone(); 							
        $(this).find(".sliderInnerContainer").prepend(slide);
        $(this).find(".sliderCarouselItem:last-child").remove();
        $(this).find(".sliderInnerContainer").css("left", "-" + $(this).find(".sliderInnerContainer").find(".sliderCarouselItem").width() + "px");
    });
    
    $(".sliderButton.next").click(function(){
        if(sliderPause === false){
           nextSlide($(this));
        }
    });
    
    $(".sliderButton.back").click(function(){
        if(sliderPause === false){
           backSlide($(this));
        }
    });
    
    function nextSlide(thisButton){
	    sliderPause = true;     
        thisButton.prev().find(".sliderInnerContainer").animate({
            left:"-=230"
        }, function(){
            slide = thisButton.prev().find(".sliderCarouselItem:first-child").clone();
                thisButton.prev().find(".sliderInnerContainer").append(slide);
                thisButton.prev().find(".sliderCarouselItem:first-child").remove();
                thisButton.prev().find(".sliderInnerContainer").css("left", "-230px");  
        });
        sliderPause = false;   
    }
    
    function backSlide(thisButton){
	    sliderPause = true;     
            thisButton.next().find(".sliderInnerContainer").animate({
                left:"+=230"
            }, function(){
            slide = thisButton.next().find(".sliderCarouselItem:last-child").clone(); thisButton.next().find(".sliderInnerContainer").prepend(slide);
                thisButton.next().find(".sliderCarouselItem:last-child").remove();
                thisButton.next().find(".sliderInnerContainer").css("left", "-230px");  
            });
            sliderPause = false;   
    }
    
    sliderButtonVisibility();
    sliderButtonPlacement();
    
    $(window).resize(function(){
        sliderButtonVisibility();
        sliderButtonPlacement();
    });
    
    function sliderButtonPlacement(){        
        setTimeout(function(){
            $(".sliderButton").each(function(){
                $(this).css("top", $(this).siblings(".sliderOuterContainer").find(".sliderCarouselItem:first-child").offset().top + ($(this).siblings(".sliderOuterContainer").find(".sliderCarouselItem:first-child").height() / 2 - $(this).find("img").height()) + "px");
            });
        }, 0004);
    }
    
    function sliderButtonVisibility(){
        if($(window).width() <= 966){
            $(".sliderButton").removeClass("hide");
        }else {
            $(".sliderButton").addClass("hide");
        }
    }    
/* ---- End Custom Slider Yo! ---- */

});