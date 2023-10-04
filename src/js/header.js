const header = document.querySelector('.header-container');

    function updateHeader() {
      if (window.scrollY > 0) {
        header.classList.add("nav-show");
      } else {
        header.classList.remove("nav-show");
      }
    }

    window.addEventListener("scroll", function () {
      updateHeader();
    });
    