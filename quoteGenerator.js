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

//1. use prompt to ask the user how many times we want to generate a random quote
//2. check if the prompt give us something between 1 and 5
//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
//4. refactor our code into a function, and put the function call inside the loop
//4.1 generate random numbers
//4.2 show the generated quotes

const quotes = prompt("How many times we want to generate a random quote?: ");
const quoteGenerator = () => {
    const randomNumber = quoteGenerator[Math.floor(Math.random() * 5)];
    randomNumber;
}

for (let i = 1; i < 5; i++) {
  quoteGenerator();
  }
