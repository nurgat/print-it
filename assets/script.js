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

// Ajoutez des Event Listeners sur les flèches 

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
