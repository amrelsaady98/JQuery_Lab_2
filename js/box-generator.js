let colorList = ['red', 'blue', 'green', 'orange']
let currentColorIndex = 0;
let flag = false;
$(document).ready(function () {
    colorPicker()
})

function colorPicker() {
    $("#container div:last-child").mouseover(function () {
        $(this).css("background-color", colorList[currentColorIndex + 1]);
        $(this).animate({height: "200px"},  400);
    });
    $("#container div:last-child").mouseout(function () {
        $(this).css("background-color", colorList[currentColorIndex]);
        $(this).animate({height: "100px"},  400);
    });
    $("#container div:last-child").click(function (e) {
        console.log(e.pageY, $(this).offset().top)
        console.log()
        if((($(this).offset().top + 200) - e.pageY) < 100) {
            $(this).css("height", "100px");
            $("#container").append(`<div class="${colorList[currentColorIndex + 1]}"></div>`)
            setTimeout(() => {
            }, 200)
            $("#container div").off();
            if (currentColorIndex < colorList.length - 1) {
                currentColorIndex++;
            } else {
                currentColorIndex = 0;
            }
            $("#container div:nth-last-child(2)").css("background-color", colorList[currentColorIndex - 1]);

            colorPicker();
        }
    })


}