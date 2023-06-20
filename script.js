

window.addEventListener("scroll", function() {
  var scrollArrow = document.querySelector(".scroll-arrow");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    
    setTimeout(() => {
      scrollArrow.style.display = "none";
    }, 200); // Rimuovi l'animazione
  } else {
    scrollArrow.style.animation = "scrollAnimation 1.5s infinite"; // Ripristina l'animazione
  }
});
  
  

function scrollButtonService() {
  var section = document.getElementById("section2");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollButtonPortfolio() {
  var section = document.getElementById("section2");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollButtonContact() {
  var section = document.getElementById("section2");
  section.scrollIntoView({ behavior: "smooth" });
}
  


function chiudiPannello() {
  var pannello = document.getElementById('popup');
  pannello.style.opacity = '0';
  pannello.style.transition = 'opacity 0.5s';

  setTimeout(function() {
    pannello.style.display = 'none';
  }, 500);
}