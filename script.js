window.onload = function(){

    var stage = document.getElementById("stage");
    var context = stage.getContext("2d");

    context.fillStyle = "white";
    context.fillRect(0,120,stage.width,20);

    context.fillStyle = "white";
    context.fillRect(0,262,stage.width,20);

    context.fillStyle = "white";
    context.fillRect(120,0,20,stage.height);

    context.fillStyle = "white";
    context.fillRect(262,0,20,stage.height);

}