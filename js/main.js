//quotes data

var quotes = [
    {
        quote: `Be yourself; everyone else is already taken.`,
        author: `Oscar Wilde`
    },
    {
        quote: `So many books, so little time.`,
        author: `Frank Zappa`
    },
    {
        quote: `Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.`,
        author: `Albert Einstein`
    },
    {
        quote: `A room without books is like a body without a soul.`,
        author: `Marcus Tullius Cicero`
    },
    {
        quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
        author: `Bernard M. Baruch`
    },
    {
        quote: `You know you're in love when you can't fall asleep because reality is finally better than your dreams`,
        author: `Dr. Seuss`
    },
    {
        quote: `In three words I can sum up everything I've learned about life: it goes on.`,
        author: `Robert Frost`
    },
    {
        quote: `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
        author: `J.K. Rowling`
    },
    {
        quote: `If you tell the truth, you don't have to remember anything.`,
        author: `Mark Twain`
    },
    {
        quote: `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
        author: `Maya Angelou`
    },
    {
        quote: `To live is the rarest thing in the world. Most people exist, that is all.`,
        author: `Oscar Wilde`
    },
    {
        quote: `I am so clever that sometimes I don't understand a single word of what I am saying.`,
        author: `Oscar Wilde`
    },
    {
        quote: `Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.`,
        author: `Steve Jobs`
    },
    {
        quote: `I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.`,
        author: `Marilyn Monroe`
    },
    {
        quote: `It is better to be hated for what you are than to be loved for what you are not.`,
        author: `Andre Gide`
    },
    {
        quote: `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.`,
        author: `H. Jackson Brown Jr.`
    },
    {
        quote: `It does not do to dwell on dreams and forget to live.`,
        author: `J.K. Rowling`
    },
    {
        quote: `We are all in the gutter, but some of us are looking at the stars.`,
        author: `Oscar Wilde`
    },
    {
        quote: `The fool doth think he is wise, but the wise man knows himself to be a fool.`,
        author: `William Shakespeare`
    },
    {
        quote: `Life is what happens to us while we are making other plans.`,
        author: `Allen Saunders`
    },
    {
        quote: `I have not failed. I've just found 10,000 ways that won't work.`,
        author: `Thomas A. Edison`
    }
]

//elements

var main = document.getElementById('main');
var genBtn = document.getElementById('generate-quote');
var quoteBody = document.getElementById('quote');
var quoteAuthor = document.getElementById('author');
var darkIco = document.getElementById('dark-mode');
var darkBtn = document.getElementById('dark-mode-btn');
var quoteIndex = -1;

//functions

function setMode() {
    if (main.classList.contains('dark')){
        darkIco.innerHTML = '<i class="fa-solid fa-moon"></i>';
        main.classList.remove('dark');
    }
    else{
        darkIco.innerHTML = '<i class="fa-regular fa-lightbulb"></i>';
        main.classList.add('dark');
    }
}
function selectRandomIndex(len){
    let r = Math.random()*10000;
    r=Math.trunc(r);
    return r%len;
}
function displayQuote(index){
    quoteBody.innerHTML = `&ldquo;${quotes[index].quote}&rdquo;`;
    quoteAuthor.innerHTML = `&mdash;${quotes[index].author}`;
}
function getValidIndex(){
    while(true){
        var index = selectRandomIndex(quotes.length);
        if(index!=quoteIndex){
            return index;
        }
    }
}

//onclick

darkBtn.onclick = function () {
    setMode();
}
genBtn.onclick = function(){
    quoteIndex=getValidIndex();
    displayQuote(quoteIndex);
}
