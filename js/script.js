// Quote Arrays


// Set 1
var animalsBeginning = ['The white albatross', 'The yellow bee', 'The green aligator', 'The red ant', 'The big elephant', 'The small bird', 'The nice cat', 'The bad dog', 'The black panther', 'The gray wolf'];

var animalsMiddle = ['is looking at', 'is jumping over', 'is trying to eat', 'is falling over', 'is running along', 'is trying to find', 'is trying to bite', 'is sleeping at', 'is trying to take away', 'is flying around'];

var animalsEnd = ['big tree', 'small pen' ,'wooden fence', 'tasty bread', 'crusty roll', 'nice stick', 'huge ball', 'blue bandana', ' big car', 'tiny plane'];

var animalsTime = ['during birthday', 'during day', 'during night', 'during film festival', 'during breakfast', 'during dinner', 'during supper', 'during work', 'during rest', 'during holiday'];

var animalsPlace = ['in Spain', 'in England', 'in France', 'in Portugal', 'in New Zeland', 'in Russia', 'in Gibraltar', 'in Rome', 'in London', 'in Hungary'];


// Set 2
var humansBeginning = ['The young man', 'The old lady', 'The old man', 'The young lady', 'The working man', 'The lazy man', 'The independent man', 'The old sailor', 'The greedy merchant', 'The honest boy'];

var humansMiddle = ['is yelling at', 'is trying to steal', 'is writing on', 'is reading inscription from', 'is thinking about', 'is trying to sell', 'is trying to buy', 'is breaking down', 'is dancing on', 'is singing on'];

var humansEnd = ['big house', 'small city', 'long road', 'tiny bike', 'red scene', 'high lamp', 'wide box', 'huge bin', 'blue pencil', 'small pin'];

var humansTime = ['in 1968', 'in 1973', 'in 1975', 'in 1979', 'in 1981', 'in 1985', 'in 1989', 'in 1992', 'in 1995', 'in 1998'];

var humansPlace = ['on the planet Mercury', 'on the planet Venus', 'on the planet Earth', 'on the planet Mars', 'on the planet Jupiter', 'on the planet Saturn', 'on the planet Uranus', 'on the planet Neptune', 'on the Moon', 'on the star'];


// Global Variables

// Number of quotes to generate
var quotesNum = 1;

// Complexity level of quotes
var quotesLevel = 1;

// Type of quotes
var quotesType = 1;

// Maksimum number of quotes fields
var quotesFields = 5;

//Empty quote
var quote = '';


// Functions

// Get random number
function randNum() {
	var num = Math.floor(Math.random()* 10);
	return num;
}

// Number of quotes buttons select
function mumOfQuotes(e) {
	var clickedItemId = e.target.id;
	if (e.target !== e.currentTarget) {
		for(i=1;i<6;i++) {
			var element = document.getElementById('noqb' + i);
			if ((element.id == clickedItemId) && (!element.classList.contains('btn-danger'))) {
				element.classList.toggle('btn-danger');
				quotesNum = i;
			} else if ((element.id != clickedItemId) && (element.classList.contains('btn-danger'))) {
				element.classList.toggle('btn-danger');
			}
		}
	}
}

// Complexity level of quotes buttons select
function lvlOfQuotes(e) {
	var clickedItemId = e.target.id;
	if (e.target !== e.currentTarget) {
		for(i=1;i<5;i++) {
			var element = document.getElementById('loqb' + i);
			if ((element.id == clickedItemId) && (!element.classList.contains('btn-danger'))) {
				element.classList.toggle('btn-danger');
				quotesLevel = i;
			} else if ((element.id != clickedItemId) && (element.classList.contains('btn-danger'))) {
				element.classList.toggle('btn-danger');
			}
		}
	}
}

// Type of quotes buttons select
function typeOfQuotes(e) {
	var clickedItemId = e.target.id;
	if (e.target !== e.currentTarget) {
		for(i=1;i<3;i++) {
			var element = document.getElementById('toqb' + i);
			if ((element.id == clickedItemId) && (!element.classList.contains('btn-danger'))) {
				element.classList.toggle('btn-danger');
				quotesType = i;
			} else if ((element.id != clickedItemId) && (element.classList.contains('btn-danger'))) {
				element.classList.toggle('btn-danger');
			}
		}
	}
}

// Creating simple single quote
function createSimple(quotesType) {
	var begRandNum = randNum();
	var midRandNum = randNum();
	var endRandNum = randNum();
	if (quotesType === 1) {
		quote = animalsBeginning[begRandNum] + ' ' + animalsMiddle[midRandNum] + ' ' + animalsEnd[endRandNum];
	} else if (quotesType === 2) {
		quote = humansBeginning[begRandNum] + ' ' + humansMiddle[midRandNum] + ' ' + humansEnd[endRandNum];
	}
}

// Adding time part to quote
function createTime() {
	if (quotesType === 1) {
		var timeRandNum = randNum();
		quote += ' ' + animalsTime[timeRandNum];
	} else if (quotesType === 2) {
		var timeRandNum = randNum();
		quote += ' ' + humansTime[timeRandNum];
	}
}

// Adding place part to quote
function createPlace() {
	if (quotesType === 1) {
		var placeRandNum = randNum();
		quote += ' ' + animalsPlace[placeRandNum];
	} else if (quotesType === 2) {
		var placeRandNum = randNum();
		quote += ' ' + humansPlace[placeRandNum];
	}
}

// Adding time and place parts to quote
function createBoth() {
	createTime();
	createPlace();
}

// Generating quotes
function generate() {
	for (i = 1; i < quotesFields + 1; i++) {
		if (i < quotesNum + 1) {
			createSimple(quotesType);
			switch (quotesLevel) {
				case 2:
					createTime();
					break;
				case 3:
					createPlace();
					break;
				case 4:
					createBoth();
					break;
			}
			quote += '.';
			document.getElementById('quote' + (i)).innerHTML = quote;
		} else {
			document.getElementById('quote' + (i)).innerHTML = '';
		}
	}
}

// Closing window (exit program)
function closeWindow() {
	if (confirm("Do you really want to close window and exit program ?")) {
		close();
	}
}


//DOM loading event
window.addEventListener("load", function () {
	
	// Adding event listener to number of quotes parent element
	var noqParent = document.querySelector('#noq');
	noqParent.addEventListener('click', mumOfQuotes);

	// Adding event listener to complexity level of quotes parent element
	var loqParent = document.querySelector('#loq');
	loqParent.addEventListener('click', lvlOfQuotes);

	// Adding event listener to type of quotes parent element
	var toqParent = document.querySelector('#toq');
	toqParent.addEventListener('click', typeOfQuotes);
	
});
