function convert() {

    var amount =
    parseFloat(document.getElementById("data").value);

    var from =
    document.getElementById("from").value;

    var to =
    document.getElementById("to").value;

    var result;

    if(from=="Indian Rupee" && to=="US Dollar")
        result = amount * 0.015;
    else if(from=="US Dollar" && to=="Indian Rupee")
        result = amount * 67.12;
    else
        result = amount;

    document.getElementById("answer").innerHTML =
    result.toFixed(2);
}