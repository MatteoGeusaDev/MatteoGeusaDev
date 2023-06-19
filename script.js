

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
  
  

  
