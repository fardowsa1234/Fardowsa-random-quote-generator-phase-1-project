// Define variables
var data;
let front = true;
const authors = document.querySelectorAll(".author");
const texts = document.querySelectorAll(".text");
const body = document.getElementById("body");
const button = document.querySelectorAll(".new-quote");
const message=new SpeechSynthesisUtterance();
const authorFront = authors[0];
const textFront = texts[0];
const buttonFront = button[0];
var quote;
var author;

// Fetch data from API
const fetchData = () =>{
    fetch("https://api.quotable.io/random")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        this.data = data;
        console.log(data)
        displayQuote1()
    });
}

// Call fetchData function to fetch data
fetchData();

// Function to speak the quote
const talk =()=>{
    message.text=quote+" by"+author;
    speechSynthesis.speak(message);
}

// Function to display the quote
const displayQuote1 = () =>{
    quote = data.content;
    author = data.author;
    if(!author){
        author = "Anonymous"
    }
    textFront.innerHTML = quote;
    authorFront.innerHTML = "- "+author;
}

// Function to get a new quote
function newQuote1(){
    fetchData();
}

// Function to tweet the quote
function tweetWithText() {
    let a = author.split(",")
    let auth= a[0]
    console.log(auth)
    var tweetText = encodeURIComponent(quote+"-"+auth);
    var tweetIntentUrl = "https://twitter.com/intent/tweet?text=" + tweetText;
    document.getElementById("tweetLink").href = tweetIntentUrl;
}