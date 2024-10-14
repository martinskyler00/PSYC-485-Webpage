// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
});

// JavaScript to toggle dropdown menus on click
document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
  dropdownLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent link from navigating
      const dropdownMenu = this.nextElementSibling;
        
      if (dropdownMenu.style.display === 'block') {
          dropdownMenu.style.display = 'none';
      } else {
          dropdownMenu.style.display = 'block';
      }
  });
});
