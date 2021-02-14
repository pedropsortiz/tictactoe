window.onload = function(){

    var stage = document.getElementById("tableStage");

    stage.addEventListener("click", function (event){

        var x = event.x;
        var y = event.y;

        wichCell(x, y);

    });


    function wichCell(x,  y){
        if(x > 10 && x < 190 && y > 69 && y < 190){
            console.log("coluna 1x3");
        }
        if(x > 190 && x < 320 && y > 69 && y < 190){
            console.log("coluna 2x3");
        }
        if(x > 320 && x < 500 && y > 69 && y < 190){
            console.log("coluna 3X3");
        }
        if(x > 10 && x < 190 && y > 190 && y < 320){
            console.log("coluna 1x2");
        }
        if(x > 190 && x < 320 && y > 190 && y < 320){
            console.log("coluna 2x2");
        }
        if(x > 320 && x < 500 && y > 190 && y < 320){
            console.log("coluna 3X2");
        }
        if(x > 10 && x < 190 && y > 320 && y < 500){
            console.log("coluna 1X1");
        }
        if(x > 190 && x < 320 && y > 320 && y < 500){
            console.log("coluna 2X1");
        }
        if(x > 320 && x < 500 && y > 320 && y < 500){
            console.log("coluna 3X1");
        }
    }

}