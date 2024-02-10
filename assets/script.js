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

// ETAPE 1: AJOUTER DES EVENT LISTENERS SUR LES FLECHES

// Définition de la fonction changeSlide
function changeSlide(direction) {
    // Logique pour changer de slide
    console.log('Changement de slide, direction : ' + direction);
}
// Initialisation des écouteurs d'événements après la définition de la fonction
document.addEventListener('DOMContentLoaded', () => {
    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');

    arrowLeft.addEventListener('click', () => {
        console.log('Clic sur la flèche gauche');
        changeSlide(-1);
    });

    arrowRight.addEventListener('click', () => {
        console.log('Clic sur la flèche droite');
        changeSlide(1);
    });
});

// ETAPE 2: AJOUTER LES BULLETS POINTS AU SLIDER

// 1) Ajouter les Bullet Points avec une boucle for

document.addEventListener('DOMContentLoaded', () => {
    const dotsContainer = document.querySelector('.dots'); // Sélectionne le conteneur des points

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span'); // Crée un nouvel élément span pour chaque slide
        dot.classList.add('dot'); // Ajoute la classe 'dot' à chaque point
        if (i === 0) {
            dot.classList.add('dot_selected'); // Ajoute la classe 'dot_selected' au premier point
        }
        dot.addEventListener('click', () => changeSlideTo(i)); // Ajoute un écouteur d'événements pour changer directement à la slide correspondante
        dotsContainer.appendChild(dot); // Ajoute le point créé au conteneur des points
    }
});

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

function changeSlide(direction) {
    // Logique existante pour changer de slide...
    updateDots(currentSlide); // Met à jour les points actifs
}

function changeSlideTo(slideIndex) {
    currentSlide = slideIndex;
    // Met à jour l'affichage de la slide...
    updateDots(currentSlide); // Met à jour les points actifs
}
