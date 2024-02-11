//DEFINITION DU TABLEAU DES SLIDES
// Tableau contenant les informations de chaque slide du carrousel.
// Chaque objet dans le tableau représente une slide avec deux propriétés :
// 'image' pour le chemin de l'image et 'tagLine' pour le texte descriptif de la slide.

const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

// SUIVI DE LA SLIDE ACUTELLE
// Variable pour suivre l'index de la slide actuellement affichée.
// Commence à 0, ce qui correspond à la première slide du tableau.
let currentSlide = 0;

// Étape 2 : Ajoutez des Event Listeners sur les flèches

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

// Étape 3 : Ajoutez des bullet points au slider

document.addEventListener('DOMContentLoaded', () => {
    const dotsContainer = document.querySelector('.dots');
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('dot_selected');
        dot.addEventListener('click', () => changeSlideTo(index));
        dotsContainer.appendChild(dot);
    });
});

// Étape 4 : Modifiez le slide au clic sur le bouton

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = slides.length - 1;
    if (currentSlide >= slides.length) currentSlide = 0;
    updateSlideAndDots();
}

// Étape 5 : Mettez en place le défilement infini sur le carrousel

			// La logique pour le défilement infini est déjà incluse dans la fonction changeSlide de l'étape 4. Cette fonction ajuste currentSlide pour boucler au début ou à la fin du tableau de slides, permettant ainsi un défilement infini.

// Fonctions complémentaires

function updateSlideAndDots() {
    const bannerImg = document.querySelector('.banner-img');
    const bannerText = document.querySelector('#banner p');
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
    updateDots(currentSlide);
}

function updateDots(currentSlide) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.remove('dot_selected');
        if (index === currentSlide) dot.classList.add('dot_selected');
    });
}

function changeSlideTo(slideIndex) {
    currentSlide = slideIndex;
    updateSlideAndDots();
}
