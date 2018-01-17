$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.slider').slider({
        //                    full_width:true,
        height:400
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