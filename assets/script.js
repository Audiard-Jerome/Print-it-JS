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

//init diapo en cours
let diapoEnCours = 0

//gestion des clics sur les fleches

// query selector sur la fleche gauche
let arrow_left = document.querySelector("#banner .arrow_left")
arrow_left.addEventListener("click", () => {
	// console.log("Vous avez cliqué sur la fleche gauche")
	// On enleve 1 a la variable diapoEnCours
	diapoEnCours -= 1
	// Défilement infini. si la diapo en cours est inferieur a 0 on passe la variable a la longueur du diaporama - 1
	if (diapoEnCours < 0) {
		diapoEnCours = slides.length - 1
	}
	// On affiche le carrousel
	afficherCarrousel (diapoEnCours)
	// console.log(diapoEnCours)
	});

// query selector sur la fleche droite
let arrow_right = document.querySelector("#banner .arrow_right")
arrow_right.addEventListener("click", () => {
	// console.log("Vous avez cliqué sur la fleche droite")
	//on ajoute 1 a la variable diapoEnCours
	diapoEnCours += 1
	// Défilement infini. Si la diapo en cours est superieur a la longueur du diaporama - 1 on passe la variable a 0
	if (diapoEnCours > slides.length - 1) {
		diapoEnCours = 0
	}
	// On affiche le carrousel
	afficherCarrousel (diapoEnCours)
	// console.log(diapoEnCours)
	});

//gestion carrousel 

//affichage image
function afficherBanner (diapoEnCours) {
	//récupération de la zone du carrousel.
	let bannerImage = document.querySelector("#banner img")
	//affichage de la diapo en cours
	bannerImage.setAttribute("alt", slides[diapoEnCours].tagLine)
	bannerImage.src = `./assets/images/slideshow/` + slides[diapoEnCours].image
}

//affichage de la tagline
function afficherTagline (diapoEnCours) {
	//récupération de la tagline
	let tagline = document.querySelector("#banner p")
	// remplacement de la tagline
	tagline.innerHTML = slides[diapoEnCours].tagLine
}

//ajout des bullets points
function afficherDots (diapoEnCours) {
	//recupération zone des bullets points
	let dots = document.querySelector("#banner .dots")
	//reinitialisation de la balise dots
	while (dots.hasChildNodes()) {
		dots.removeChild(dots.firstChild);
  	}
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
}


// fonction pour afficher toute les parties du carousel.

function afficherCarrousel (diapoEnCours) {
	afficherBanner (diapoEnCours)
	afficherTagline (diapoEnCours)
	afficherDots (diapoEnCours)
}

//affichage du carrousel au chargement de la page

afficherCarrousel (diapoEnCours)
