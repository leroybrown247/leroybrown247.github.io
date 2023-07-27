// Wrap your JavaScript code inside a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function () {
    // This ensures your code runs after the HTML content is loaded
  
    // Get the hamburger button element
    const hamburgerButton = document.querySelector('.hamburger-button');
    // Get the times (close) button element
    const timesButton = document.querySelector('.times');
    // Get the mobile navigation menu element
    const mobileNav = document.querySelector('.mobile-nav');
 
  
    // Add the event listener for the hamburger button
    hamburgerButton.addEventListener('click', function() {
      mobileNav.classList.add('open');
    });
  
    // Add the event listener for the times (close) button
    timesButton.addEventListener('click', function() {
      mobileNav.classList.remove('open');
    });
  
    // Add event delegation for the mobile navigation to close when clicking on `.click` elements
    mobileNav.addEventListener('click', function(event) {
      const clickedElement = event.target;
      // Check if the clicked element has the class "click" or "click-1" or "click-2" or "click-3"
      if (clickedElement.classList.contains('click') || clickedElement.classList.contains('click-1') || clickedElement.classList.contains('click-2') || clickedElement.classList.contains('click-3')) {
        mobileNav.classList.remove('open');
      }
    });
});