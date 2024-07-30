// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

//NavBar
//Ma partie
// LastScroll = 0;

// window.addEventListener("scroll", () => {
//   if (window.scrollY <= 0) {
//     navbar.style.height = "90px";
//   } else {
//     navbar.style.height = "45px";
//   }

//   // console.log(scrollY);
// });

// //Img
// const img = document.getElementById("imgImprovise");
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 300) {
//     img.style.opacity = 1;
//     img.style.transform = "translateX(0)";
//   }
// });

// const popup = document.getElementById("popup");
// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 1070) {
//     popup.style.opacity = 1;
//     popup.style.transform = "translateX(0)";
//   }
//   // LastScroll = window.scrollY;
// });

// const btnClose = document.getElementById("closeBtn");
// window.addEventListener("click", () => {
//   popup.style.opacity = 0;
//   popup.style.transform = "translateX(400px)";
// });

//On calcule un certain pourcentage pour trouver ou se trouve l'utilisateur
//Quelque soit la taille du site

//On va jouer avec le boléan pour savoir si il a déjà été affiché auparavant
//Pour ensuite le faire disparaître en le passant en false
let playOnce = true;

window.addEventListener("scroll", () => {
  //Navbar effect
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  //Image
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  //Popup
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500)";
});
