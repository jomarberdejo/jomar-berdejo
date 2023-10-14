document.addEventListener("DOMContentLoaded", function() {
            // Loading
            const loadCont = document.querySelector(".loader-container");
            loadCont.style.display = "none";

            const loader = document.querySelector(".loader");
            loader.classList.remove("loader");
        });