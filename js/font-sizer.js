let maxFontSize = 36;
let minFontSize = 12;
let fontChangeStep = 4;

$("#increase").click(function(){
    $(".error").text("")
    if($(".content").css("font-size").match(/\d+/) < maxFontSize){
        $(".content").css("font-size", "+=" + fontChangeStep + "px");
    } else {
        $(".error").text("Reach maximum size!");
    }
});
$("#decrease").click(function(){
    $(".error").text("")
    if($(".content").css("font-size").match(/\d+/) > minFontSize){
        $(".content").css("font-size", "-=" + fontChangeStep + "px");
    } else {
        $(".error").text("Reach minimum size!");
    }
});
