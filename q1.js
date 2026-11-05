function findWords() {

    let str = document.getElementById("text").value;
    let words = str.split(" ");

    let shortest = words[0];
    let longest = words[0];

    for(let i=1; i<words.length; i++) {

        if(words[i].length < shortest.length)
            shortest = words[i];

        if(words[i].length > longest.length)
            longest = words[i];
    }

    document.getElementById("result").innerHTML =
        "Shortest Word: " + shortest +
        "<br>Longest Word: " + longest;
}