var heads = 0;
var tails = 0;

window.onload = function() {
    document.getElementById("flip")
    .addEventListener("click", flipFunction);
}

function flipFunction() {

    var random =
    Math.floor(Math.random()*2);

    if(random == 0) {

        document.getElementById("coin").src =
        "head.jpg";

        heads++;

        document.getElementById("num_heads").innerHTML =
        heads;
    }
    else {

        document.getElementById("coin").src =
        "tail.jpg";

        tails++;

        document.getElementById("num_tails").innerHTML =
        tails;
    }
}