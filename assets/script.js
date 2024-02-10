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

// Écouteur d'événement DOMContentLoaded : Ce code s'exécute une fois que le contenu du DOM est entièrement chargé, assurant que tous les éléments HTML sont accessibles.
document.addEventListener('DOMContentLoaded', () => {

	// Sélection du conteneur des points (dotsContainer) : On sélectionne l'élément HTML qui va contenir les bullet points. Cet élément doit avoir la classe .dots.
    const dotsContainer = document.querySelector('.dots'); 

	// Création des bullet points : Une boucle for crée un élément span pour chaque slide dans le tableau slides. Chaque span représente un bullet point.
    for (let i = 0; i < slides.length; i++) {
		 // Crée un nouvel élément span pour chaque slide
        const dot = document.createElement('span'); 
        // À chaque bullet point est ajoutée la classe dot. 
		dot.classList.add('dot');
			// Le premier bullet point reçoit également la classe dot_selected pour indiquer qu'il est actif, car la première slide est affichée par défaut au chargement. 
            dot.classList.add('dot_selected'); 
		// Écouteur d'événement sur chaque bullet point : Un écouteur d'événement est attaché à chaque bullet point pour appeler changeSlideTo(i) lorsque le point est cliqué, permettant de naviguer directement à la slide correspondante.
       dot.addEventListener('click', () => changeSlideTo(i)); 
        // Ajout des bullet points au conteneur : Chaque bullet point créé est ajouté au dotsContainer.
	   dotsContainer.appendChild(dot); 
    }
 });

// 2) Mettre à Jour le Point Actif avec une boucle for

// Définition de la fonction 'updateDots' qui prend 'currentSlide' comme paramètre.
function updateDots(currentSlide) {
    // Sélectionne tous les éléments HTML ayant la classe 'dot' et les stocke dans la variable 'dots'.
    const dots = document.querySelectorAll('.dot');
    
    // Démarre une boucle qui parcourt chaque élément 'dot' trouvé.
    for (let i = 0; i < dots.length; i++) {
        // Supprime la classe 'dot_selected' de l'élément 'dot' actuel pour s'assurer qu'aucun point n'est visuellement marqué comme actif.
        dots[i].classList.remove('dot_selected');
        
        // Vérifie si l'index de l'élément 'dot' actuel (i) correspond à l'index de la slide actuelle ('currentSlide').
        if (i === currentSlide) {
            // Si oui, ajoute la classe 'dot_selected' à cet élément 'dot', le marquant ainsi comme actif.
            dots[i].classList.add('dot_selected');
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
    // Met à jour l'affichage de la slide
	updateSlideContent(currentSlide); 
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
