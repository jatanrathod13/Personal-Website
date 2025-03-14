// Main application JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Handle image loading errors
  document.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.onerror = null;
      this.src = '/images/placeholder.jpg';
      this.classList.add('error');
    };
  });

  // Initialize any interactive components
  const init = () => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  init();
});