function calculate() {

    var weight =
    parseFloat(document.getElementById("weight").value);

    var height =
    parseFloat(document.getElementById("height").value);

    var bmi = weight / (height * height);

    document.getElementById("score").innerHTML =
    bmi.toFixed(2);

    if(bmi < 18)
        document.getElementById("type").innerHTML = "Underweight";
    else if(bmi <= 25)
        document.getElementById("type").innerHTML = "Normal";
    else if(bmi <= 30)
        document.getElementById("type").innerHTML = "Overweight";
    else
        document.getElementById("type").innerHTML = "Obese";
}