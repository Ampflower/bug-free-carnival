import Elevator from './elevator.min.js';

document.querySelectorAll('[data-random]').forEach(el => {
	const choices = el.getAttribute('data-random').split(',');
	el.textContent = choices[Math.floor(Math.random() * choices.length)];

	el.onclick = () => {
		el.textContent = choices[Math.floor(Math.random() * choices.length)];
	};
});

var elevator = new Elevator({
	element: document.getElementById('elevator-button'),
	mainAudio: '/assets/audio/elevator.ogg',
	duration: 20000
});

document.getElementById('elevator-button').addEventListener("click", elevator.elevate);
