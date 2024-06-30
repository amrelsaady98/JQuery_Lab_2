$(document).ready(function(){
    animateBox();
})
function animateBox(){
    $(".box").animate({
        left: "50%",
        width: "200px",
        height: "200px",
        "background-color": "yellow"
    }, 2000);
    $(".box").animate({
        top:"75%",
        width: "100px",
        height: "100px",
        "background-color": "blue"
    }, 2000);
    $(".box").animate({
        left: "0%",
        width: "200px",
        height: "200px",
        "background-color": "green"
    }, 2000);
    $(".box").animate({
        top: "0",
        width: "100px",
        height: "100px",
        "background-color": "red"
    }, 2000);
    animateBox();
}