// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
  quote:`"A rose by any other name would smell as sweet."`,
  person: `William Shakespeare`
},{
  quote:`"All that glitters is not gold."`,
  person: `William Shakespeare`
},{
  quote:`"All the world's a stage, and all the men and women merely players."`,
  person: `William Shakespeare`
}, {
  quote:`"Ask not what your country can do for you; ask what you can do for your country."`,
  person: `John Kennedy	`
},{
  quote:`"Ask, and it shall be given you; seek, and you shall find."`,
  person: `the Bible`
},{
  quote:`"Slighty percent of success is showing up."`,
  person: `Woody Allen`
}, ];

btn.addEventListener('click', function(){

  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
})