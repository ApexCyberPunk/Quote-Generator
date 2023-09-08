const quote = document.getElementById('quote');
const author = document.querySelector('.author');
const btn = document.getElementById('btn');

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
    .then(x => x.json())
    .then(y => {

        console.log(y)
        console.log(y.author)
        quote.innerText = y.content;
        author.innerText = y.author;
    })
}

window.addEventListener('load', getQuote);
btn.addEventListener('click', getQuote);


