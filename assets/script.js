const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// query selector sur la fleche gauche
let arrow_left = document.querySelector("#banner .arrow_left")
arrow_left.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la fleche gauche")
	});

// query selector sur la fleche gauche
let arrow_right = document.querySelector("#banner .arrow_right")
arrow_right.addEventListener("click", () => {
	console.log("Vous avez cliqué sur la fleche droite")
	});