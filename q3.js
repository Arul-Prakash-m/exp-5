function grow() {

    var rows =
    parseInt(document.getElementById("rows").value);

    var cols =
    parseInt(document.getElementById("columns").value);

    var garden =
    document.getElementById("garden");

    garden.innerHTML = "";

    var fruits = ["apple.jpg","orange.jpg"];

    for(var i=0;i<rows;i++) {

        for(var j=0;j<cols;j++) {

            var random =
            Math.floor(Math.random()*2);

            garden.innerHTML +=
            "<img src='" + fruits[random] +
            "' width='100' height='100'>";
        }

        garden.innerHTML += "<br>";
    }
}