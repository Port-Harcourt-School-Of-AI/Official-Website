// Scroll to top button and sticky header functionalities
const scrollToTopButton = document.getElementById('js-top');
const navigation = document.querySelector('.header__navigation');
console.log(navigation, scrollToTopButton);

const scrollFunc = () => {
  // Get the current scroll value
  let Y = window.scrollY;
  
  // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
  if (Y > 600) {
    scrollToTopButton.className = "top-btn show";
    navigation.classList.add('sticky');

  } else {
    scrollToTopButton.className = "top-btn hide";
    navigation.classList.remove('sticky');
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  // Let's set a variable for the number of pixels we are from the top of the document.
  const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document.
  // We'll also animate that scroll with requestAnimationFrame:
  // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 15);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}  

