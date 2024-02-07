let apiQuote = [
  {
    quote: "“Beware of what you become in pursuit of what you want.”",
    author: "-- Jim Rohn",
  },
  {
    quote:"“It's not what happens to you, but how you react to it that matters.”",
    author: "-- Epictetus",
  },
  {
    quote: "“The best revenge is massive success.”",
    author: "-- Frank Sinatra",
  },
  {
    quote: "“You miss 100% of the shots you don't take.”",
    author: "-- Wayne Gretzy",
  },
  {
    quote: "“Do not take life too seriously. You will not get out alive.”",
    author: "-- Elbert Hubbard",
  },
  {
    quote:'“Be yourself; everyone else is already taken.”',
    author:"-- Oscar Wilde",
  },
  {
    quote:'“So many books, so little time.”',
    author:"-- Frank Zappa",
  },
  {
    quote:'“A friend is someone who knows all about you and still loves you.”',
    author:"-- Elbert Hubbard",
  },
  {
    quote:'"You miss 100% of the shots you do not take."',
    author:'-- Wayne Gretzy',
  },
  {
    quote:'“Always forgive your enemies; nothing annoys them so much.”',
    author:'-- Oscar Wilde',
  },
];


var lastindex=-1;
function newQuote(){
    var random=Math.floor(Math.random()*apiQuote.length);
    while(lastindex==random){
        random=Math.floor(Math.random()*apiQuote.length);
    }
    document.getElementById('quote').innerHTML=apiQuote[random].quote;
    document.getElementById('author').innerHTML=apiQuote[random].author;
    lastindex=random;

}