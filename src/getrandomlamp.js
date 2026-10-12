import { lamps } from "./lamplist.js"

function getRandomLamp(){
	console.log('here')
    var num = Math.floor(Math.random() * (lamps.length));
	let chosenLamp = {};

	// 1 in 10,000 chance to get placeholder art
	var specialCheck = Math.floor(Math.random() * (9999));
	if(specialCheck == 0) {
		chosenLamp.title = "Placeholder Art";
		chosenLamp.author = "Raleigh Welch";
		chosenLamp.year = 2026;
		chosenLamp.src = "./sources/placeholder_lamp.webp";
		chosenLamp.alt = "poorly drawn placeholder art of a green banker's lamp";
		chosenLamp.medium = "art"
	} else {
		chosenLamp = lamps[num]
	}
	const area = document.getElementById("photo-area")
    const container = document.getElementById("main-photo-container");
	container.innerHTML = "";
	//add space above and below photo
	//const gutter = document.createElement("div");
	const gutter2 = document.createElement("div");
	//gutter.classList.add("gutter-1");
	gutter2.classList.add("gutter-2");
	//container.appendChild(gutter);

	//add image and alt text
	const lamp = document.createElement("img");
	lamp.classList.add("main-photo");
	lamp.src = chosenLamp.src;
	lamp.alt = chosenLamp.alt;
	container.appendChild(lamp);
	
	container.appendChild(gutter2);
	const infoContainer = document.createElement("div");
	infoContainer.classList.add("info-container");
	const title = document.createElement("h3");
	title.classList.add("informational-title");
	const year = document.createElement("h3");
	year.classList.add("informational-year");
	const author = document.createElement("h3")
	author.classList.add("informational-author");

	area.appendChild(infoContainer)

	//generate title
	if (chosenLamp.medium == "movie" || chosenLamp.medium == "television") {
		title.textContent = chosenLamp.title;
		title.style.fontStyle = "italic";
		year.textContent = " (" + chosenLamp.year.toString() + ")"
		
		infoContainer.appendChild(title)
		infoContainer.appendChild(year)

		//var info = "<i>" + chosenLamp.title + "</i> &thinsp; " + "(" + chosenLamp.toString() + ")";
		// info.textContent = "<em>" + title + "</em>" + " (" + lamps[num].year.toString() + ")"
	} else if (chosenLamp.medium == "art") {
		title.textContent = chosenLamp.title;
		title.style.fontStyle = "italic";
		year.textContent = " (" + chosenLamp.year.toString() + ") ";
		author.textContent = "- " + chosenLamp.author;
		infoContainer.appendChild(title);
		infoContainer.appendChild(year);
		infoContainer.appendChild(author)
	}


	
}

//initial load
getRandomLamp()