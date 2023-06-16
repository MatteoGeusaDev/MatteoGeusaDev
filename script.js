function menu() {
   


    var dropdownElement = document.querySelector(".dropdown-content ");
    dropdownElement.style.animation = "move 1s";
    dropdownElement.style.display = "flex"


  }



  function closemenu() {
    var dropdownElement = document.querySelector(".dropdown-content");
    dropdownElement.style.animation = "closemove 1s";
  
    setTimeout(function() {
      dropdownElement.style.display = "none";
    }, 990); // Ritardo di 2,5 secondi (2500 millisecondi)
  }

  window.addEventListener("scroll", function() {
    var scrollArrow = document.querySelector(".scroll-arrow");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      scrollArrow.style.display = "none"; // Rimuovi l'animazione
    } else {
      scrollArrow.style.animation = "scrollAnimation 1.5s infinite"; // Ripristina l'animazione
    }
  });
  
  

  
