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

// SUIVI DE LA SLIDE ACUTELLE
// Variable pour suivre l'index de la slide actuellement affichée.
// Commence à 0, ce qui correspond à la première slide du tableau.
let currentSlide = 0;


// ETAPE 1: AJOUTER DES EVENT LISTENERS SUR LES FLECHES

// Mettre un event listener sur chacune des flèches. 
// Ajouter un console.log ou une alert() pour tester le fonctionnement des event listeners.
// S’assurer qu’on peut différencier le clic sur le bouton gauche du clic sur le bouton droit. 

const arrowLeft = document.querySelector('.arrow_left');
arrowLeft.addEventListener('click', () => {
	console.log('Clic sur la flèche gauche');
	changeSlide(-1);
});

const arrowRight = document.querySelector('.arrow_right');
arrowRight.addEventListener('click', () => {
    console.log('Clic sur la flèche droite');
    changeSlide(1);
});


// ETAPE 2: AJOUTER LES BULLETS POINTS AU SLIDER

// 1) Ajouter les Bullet Points avec une boucle for

	// Sélectionne le conteneur des points
    const dotsContainer = document.querySelector('.dots'); 

	// Boucle pour créer un bullet point pour chaque slide
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span'); // Crée un nouvel élément span pour chaque slide
        dot.classList.add('dot'); // Ajoute la classe 'dot' à chaque point
        if (i === 0) { // // Marque le premier bullet point comme sélectionné
            dot.classList.add('dot_selected'); // Ajoute la classe 'dot_selected' au premier point
        }
        dot.addEventListener('click', () => changeSlideTo(i)); // Ajoute un écouteur d'événements pour changer directement à la slide correspondante
        dotsContainer.appendChild(dot); // Ajoute le point créé au conteneur des points
    }
;

// 2) Mettre à Jour le Point Actif avec une boucle for

function updateDots(currentSlide) {
    const dots = document.querySelectorAll('.dot'); // Sélectionne tous les points
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot_selected'); // Supprime la classe 'dot_selected' de tous les points
        if (i === currentSlide) {
            dots[i].classList.add('dot_selected'); // Ajoute la classe 'dot_selected' au point correspondant à la slide actuelle
        }
    }
}

// 3) Appeler 'updateDots' Lors du Changement de Slide

function changeSlideTo(slideIndex) {
    currentSlide = slideIndex;
    // Met à jour l'affichage de la slide...
    updateDots(currentSlide); // Met à jour les points actifs
}



