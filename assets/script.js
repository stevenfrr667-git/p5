// Données
const slides = [
  { image: "slide1.jpg", tagLine: "Impressions tous formats <span>en boutique et en ligne</span>" },
  { image: "slide2.jpg", tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>" },
  { image: "slide3.jpg", tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>" },
  { image: "slide4.png", tagLine: "Autocollants <span>avec découpe laser sur mesure</span>" },
];

// Sélecteurs
const BannerImg     = document.querySelector(".banner-img");
const textEl        = document.querySelector("#banner p");
const arrowLeft     = document.querySelector("#banner .arrow_left");
const arrowRight    = document.querySelector("#banner .arrow_right");
const dotsContainer = document.querySelector(".dots");

// État
let currentIndex = 0;

// Bullets dynamiques (un point par slide)
dotsContainer.innerHTML = "";
slides.forEach(() => {
  const dot = document.createElement("span");
  dot.className = "dot";
  dotsContainer.appendChild(dot);
});

// Rendu (image + texte + bullet actif)
function render() {
  const s = slides[currentIndex];
  BannerImg.src = `./assets/images/slideshow/${s.image}`;
  textEl.innerHTML = s.tagLine;

  const dots = dotsContainer.querySelectorAll(".dot");
  dots.forEach(d => d.classList.remove("dot_selected"));
  dots[currentIndex].classList.add("dot_selected");
}

// Handlers flèches (avec logs/alert pour test)
arrowRight.addEventListener("click", () => {
  console.log("→ clic flèche DROITE");
  // alert("→ clic flèche DROITE");
  currentIndex = (currentIndex + 1) % slides.length;            // passe à la suivante, boucle vers la 1ère
  render();                                                      // MAJ image, texte, bullet
});

arrowLeft.addEventListener("click", () => {
  console.log("← clic flèche GAUCHE");
  // alert("← clic flèche GAUCHE");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // passe à la précédente, boucle vers la dernière
  render();                                                           // MAJ image, texte, bullet
});

// Init : la première slide est active (bullet sélectionné = premier)
render();
