// created three different variable to store quotes
var quotesA = [
    ["The more you learn the more you know something."], 
    ["Picking a piece from clump"], 
    ["Hi there!"], 
    ["who is gonna"], 
    ["I will be there."]];
var quotesB = [
    ["she has done it for a long time"],
    ["bring them here"],
    ["you are so fast!"],
    ["for everything"],
    ["just a moment before you arrived"]];

var quotesC = [
    ["valuable thing?"],
    ["that's nice to hear!"],
    ["I don't want to be the last."],
    ["she dresses well."],
    ["leave the town!"]
];



//then the quotes are generated randomly here.

    let quoteIndex1 = Math.floor(Math.random() * quotesA.length);
    let quoteIndex2 = Math.floor(Math.random() * quotesB.length);
    let quoteIndex3 = Math.floor(Math.random() * quotesC.length);

currentQuotes = quotesA[quoteIndex1] + " " + quotesB[quoteIndex2] + " " + quotesC[quoteIndex3];
console.log(currentQuotes);




