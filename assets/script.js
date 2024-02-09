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

//ajout des bullets points

//init diapo en cours
let diapoEnCours = 0

//recupération zone des bullets points
let dots = document.querySelector("#banner .dots")
//ecriture de x dots en fonction de la longueur de la liste 
	for (let i = 0; i < slides.length; i++) {
	// crée une div avec la classe dot.
		let dot = document.createElement(`div`)
		dot.classList.add(`dot`)
		//test pour savoir si c'est la diapo en cours
		if (diapoEnCours === i) {
			//si vrai on ajouter la class dot_selected
			dot.classList.add("dot_selected")
			} 
		//affiche les dots au bon endroit.
		dots.appendChild(dot)
		}