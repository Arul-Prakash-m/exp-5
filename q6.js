window.onload = function() {

    document.getElementById("submit")
    .addEventListener("click", calculateOrder);
}

function calculateOrder() {

    var small =
    parseInt(document.getElementById("small").value) || 0;

    var medium =
    parseInt(document.getElementById("medium").value) || 0;

    var large =
    parseInt(document.getElementById("large").value) || 0;

    var subtotal =
    (small * 100) +
    (medium * 200) +
    (large * 400);

    var tax = subtotal * 0.09;

    var total = subtotal + tax;

    var tip =
    document.querySelector(
    'input[name="tip"]:checked'
    ).value;

    total += total * (tip / 100);

    document.getElementById("price").innerHTML =
    total.toFixed(2);
}