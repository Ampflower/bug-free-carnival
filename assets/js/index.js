import Elevator from './elevator.min.js';

function setRandomQuote(quote) {
	quote.innerText = quote.dataset['random'+Math.floor(Math.random() *+ quote.dataset.random)];
}

for(let randomizable of document.getElementsByClassName('randomizable')) {
	// Unboxing and storing here as we don't want to do this every time on click
	let random = document.getElementsByClassName('random')[0];
	function clickHandler() { setRandomQuote(random) };
	clickHandler();
	randomizable.addEventListener("click", clickHandler);
}

document.body.classList += 'js'

var elevator = new Elevator({
	element: document.getElementById('elevator-button'),
	mainAudio: '/assets/audio/elevator.ogg',
	duration: 20000
});

document.getElementById('elevator-button').addEventListener("click", elevator.elevate);
