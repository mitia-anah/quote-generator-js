// created three different variable to store quotes
var quotesA = [
    ["The more you learn the more you know something."], 
    ["Picking a piece from clump"], 
    ["Hi there!"], 
    ["who is going to buy me a dress"], 
    ["I will be there."]];
var quotesB = [
    ["she has done it for a long time"],
    ["did you find my bag"],
    ["you are so fast!"],
    ["for everything"],
    ["just a moment before you arrived"]];

var quotesC = [
    ["wow! what a beautiful flower!"],
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
if (quotes >= 1 && quotes <= 5) {
    for (let i = 0; i < quotes; i++) {
        const quoteGenerator = () => {
            let quoteIndex1 = Math.floor(Math.random() * quotesA.length);
            let quoteIndex2 = Math.floor(Math.random() * quotesB.length);
            let quoteIndex3 = Math.floor(Math.random() * quotesC.length);

        currentQuotes = quotesA[quoteIndex1] + " " + quotesB[quoteIndex2] + " " + quotesC[quoteIndex3];
        console.log(currentQuotes);
        }
        quoteGenerator();
}
}


var sadQuotes = [
    "It's so hard to forget someone who gave you so much to remember.",
    "To have felt too much is to end up feeling nothing.",
    "Tears are words the mouth can’t say nor can the heart bear.",
    "Let your tears come. Let them water your soul. ",
    "Behind my smile is everything you’ll never understand."
];

var happyQuotes = [
    "Every moment is a fresh beginning.",
    "Aspire to inspire before we expire.",
    "Problems are not stop signs, they are guidelines. ",
    "When words fail, music speaks.",
    "Try to be a rainbow in someone’s cloud."
];


function quoteGenerator() {
    let typeOfQuote1 = Math.floor((Math.random() * sadQuotes.length));
    let random1 = sadQuotes[typeOfQuote1];
    let typeOfQuote2 = Math.floor((Math.random() * happyQuotes.length));
    let random2 = happyQuotes[typeOfQuote2];
    let typeOfQuote = `${random1} ${random2}`;
    return typeOfQuote;
 }

   
function newQuoteGenerator() {
    //Let the user to choose their prefering quote between 1 or 2:
   let choiceQuote = prompt('Choose the type of quote you want: (between 1 or 2)');
   if (choiceQuote === "1") {
       console.log(quoteGenerator());
     } else if (choiceQuote === "2") {
       console.log(quoteGenerator())
    }
 }
    newQuoteGenerator();
    //Ask the user if they still want to countinue.
    let choice = prompt('Do you want more quotes?(yes or no)');
    if (choice === "yes") {
    newQuoteGenerator();
    } else if (choice === "no") {
    alert("no problem")
    }















