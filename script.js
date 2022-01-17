// Screens
const startScreen = document.getElementById('startScreen');
const temperatureScreen = document.getElementById('temperatureScreen');
const waterPresenceScreen = document.getElementById('waterPresenceScreen');
const attractionScreen = document.getElementById('attractionScreen');
const rangeScreen = document.getElementById('rangeScreen');
const resultScreen = document.getElementById('resultScreen');

// Buttons 
const btnStart = document.getElementById('btnStart');
const btnTemperatureScreen = document.getElementById('btnTemperatureScreen');
const btnWaterPresenceScreen = document.getElementById('btnWaterPresenceScreen');
const btnAttractionScreen = document.getElementById('btnAttractionScreen');
const btnResults = document.getElementById('btnResults');

// Select Values
const temperatureSelect = document.getElementById('temperatureSelect');
const waterPresenceSelect = document.getElementById('waterPresenceSelect');
const attractionSelect = document.getElementById('attractionSelect');
const rangeSelect = document.getElementById('rangeSelect');

// Average Result
const divAverage = document.getElementById('divAverage');
const averageResult = document.getElementById('averageResult');

// Result
const resultPlace = document.getElementById('resultPlace');
const resultDescription = document.getElementById('resultDescription');
const resultImg = document.getElementById('resultImg');

// Initial values
let temperature = '';
let waterPresence = false;
let attraction = false;
let range = '';

let tempArray = [];
let tempArray2 = [];
let tempArray3 = [];
let tempArray4 = [];

// Main script
btnStart.addEventListener('click', () => {
	startScreen.classList.add('d-none');
	temperatureScreen.classList.remove('d-none');
});

//1
btnTemperatureScreen.addEventListener('click', () => {
	divAverage.classList.remove('d-none');

	temperature = temperatureSelect.value;

	for (let i = 0; i < places.length; i++) {
		if (temperature === places[i].temperature) {
			tempArray.push(places[i]);
		}
	}

	averageResult.innerText = tempArray[0].place;

	temperatureScreen.classList.add('d-none');
	waterPresenceScreen.classList.remove('d-none');
});

//2
btnWaterPresenceScreen.addEventListener('click', () => {
	waterPresence = waterPresenceSelect.value;

	for (let i = 0; i < tempArray.length; i++) {
		if (waterPresence == tempArray[i].waterPresence) {
			tempArray2.push(tempArray[i]);
		}
	}

	averageResult.innerText = tempArray2[0].place;

	waterPresenceScreen.classList.add('d-none');
	attractionScreen.classList.remove('d-none');
});

//3
btnAttractionScreen.addEventListener('click', () => {
	attraction = attractionSelect.value;

	for (let i = 0; i < tempArray2.length; i++) {
		if (attraction == tempArray2[i].attraction) {
			tempArray3.push(tempArray2[i]);
		}
	}

	averageResult.innerText = tempArray3[0].place;

	attractionScreen.classList.add('d-none');
	rangeScreen.classList.remove('d-none');
});

const leftside = document.getElementById('leftside');

//4
btnResults.addEventListener('click', () => {
	divAverage.classList.add('d-none');

	range = rangeSelect.value;

	for (let i = 0; i < tempArray3.length; i++) {
		if (range == tempArray3[i].range) {
			tempArray4.push(tempArray3[i]);
		}
	}

	resultPlace.innerText = tempArray4[0].place;
	// resultImg.src = tempArray4[0].img;
	leftside.style.backgroundImage = 'url('+tempArray4[0].img+')';
	resultDescription.innerText = tempArray4[0].description; 

	rangeScreen.classList.add('d-none');
	resultScreen.classList.remove('d-none');
});