<!-- Scripts -->
  
    // Loading page functionality
    document.addEventListener('DOMContentLoaded', function () {
      const loadingPage = document.getElementById('loading-page');
      const mainPortfolio = document.getElementById('main-portfolio');
      
      // Function to hide loading screen
      function hideLoadingScreen() {
        if (loadingPage.style.display !== 'none') {
          loadingPage.classList.add('fade-out');
          setTimeout(() => {
            loadingPage.style.display = 'none';
            mainPortfolio.classList.add('show');
          }, 1000);
          // Remove event listeners after hiding
          document.removeEventListener('click', hideLoadingScreen);
          document.removeEventListener('keypress', hideLoadingScreen);
        }
      }
      
      // Auto-hide after 3.5 seconds
      setTimeout(hideLoadingScreen, 3500);
      
      // Allow skipping with click or keypress
      document.addEventListener('click', hideLoadingScreen);
      document.addEventListener('keypress', hideLoadingScreen);
    });

    // Initialize Swiper
    document.addEventListener('DOMContentLoaded', function () {
      const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      });
    });

    // Simple form handling
    document.addEventListener('DOMContentLoaded', function () {
      const form = document.querySelector('#contact form');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thank you for your message! This is just a demo form.');
        });
      }
    });
   
  