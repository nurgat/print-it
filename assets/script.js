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

// Initialisation des écouteurs d'événements après la définition de la fonction

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

// ETAPE 3: MODIFIER LE SLIDE AU CLICK

// S'assurer que la fonction changeSlide modifie l'index de la slide actuelle, met à jour l'image et le texte, et gère les cas où l'utilisateur atteint la première ou la dernière image.

function changeSlide(direction) {
    // Calcule le nouvel index
    let newIndex = currentSlide + direction;

    // Gère le cas où le carrousel dépasse les limites
    if (newIndex < 0) {
        newIndex = slides.length - 1; // Revient à la dernière slide si on dépasse la première
    } else if (newIndex >= slides.length) {
        newIndex = 0; // Revient à la première slide si on dépasse la dernière
    }

    // Met à jour l'index de la slide actuelle
    currentSlide = newIndex;

    // Met à jour l'image et le texte de la slide
    updateSlideContent(currentSlide);

    // Met à jour les bullet points
    updateDots(currentSlide);
}

function updateSlideContent(slideIndex) {
    // Sélectionne l'élément de l'image et du texte
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');

    // Construit le chemin de la nouvelle image
    bannerImg.src = `./assets/images/slideshow/${slides[slideIndex].image}`;

    // Met à jour le texte correspondant à l'image
    bannerText.innerHTML = slides[slideIndex].tagLine;
}

// ETAPE 4 : METTRE EN PLACE UN DEFILEMENT INDEFINI SUR LA CARROUSEL

