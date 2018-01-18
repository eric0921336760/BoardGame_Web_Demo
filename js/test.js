$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.slider').slider({
        //                    full_width:true,
        height:400
    });

       $("ul li a").on("click",function(){
                var a_elm =$(this);
                var target_id = a_elm.attr("href");

                var topTo = 0;

                if(!target_id!="#"){
                    topTo = $(target_id).position().top;
                }

                $("html,body").animate({
                    scrollTop:topTo
                },600,function(){
                    $("ul li[class='active']").removeClass('active');

                    a_elm.parent().addClass('class');
                });

                return false;
            });
    


});

$("a.change_volume").on("click",function(){
    var status=$(this).attr("rel");
    if(status=="mute"){
        $("video")[0].muted=false;
        console.log(status);
        $(this).attr("rel","sound");
        $(this).find("i.material-icons").text("volume_up");

    }else{
        $("video")[0].muted=true;
        status="mute";
        $(this).attr("rel","mute");
        $(this).find("i.material-icons").text("volume_off");
    }


});

$("div.myvideo").on("click",function(){
    console.log("haha");
    var video=$("video")[0];
    
    if(video.paused){
        video.play();
    }else{
        
        video.pause();
    }
        
     
    
});


