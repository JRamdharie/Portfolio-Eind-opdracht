const btn = document.querySelector('.btn');
const output = document.querySelector('.p1');

const quotes = [
"“Be yourself; everyone else is already taken.” ― Oscar Wilde",

"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ― Albert Einstein",

"“So many books, so little time.” ― Frank Zappa",

"“A room without books is like a body without a soul.”” ― Marcus Tullius Cicero",

];

btn.addEventListener('click', myFunction);

function myFunction(){
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    output.innerHTML = randomQuote;
}   
