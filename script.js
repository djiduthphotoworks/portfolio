document.addEventListener("DOMContentLoaded", function() {
    // 1. Logika Dark Mode / Light Mode Toggle
    const themeToggleBtn = document.getElementById("themeToggle");
    
    if (themeToggleBtn) {
        const bodyElement = document.body;
        const themeIcon = themeToggleBtn.querySelector("i");

        // Periksa memori browser (apakah user sebelumnya memilih mode terang)
        if (localStorage.getItem("theme") === "light") {
            bodyElement.classList.add("light-mode");
            if (themeIcon) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
            }
        }

        themeToggleBtn.addEventListener("click", function() {
            bodyElement.classList.toggle("light-mode");
            
            if (bodyElement.classList.contains("light-mode")) {
                if (themeIcon) {
                    themeIcon.classList.remove("fa-moon");
                    themeIcon.classList.add("fa-sun");
                }
                localStorage.setItem("theme", "light");
            } else {
                if (themeIcon) {
                    themeIcon.classList.remove("fa-sun");
                    themeIcon.classList.add("fa-moon");
                }
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // 2. Logika Tombol Panah Naik (Scroll to Top)
    const scrollTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollTopBtn) {
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add("show");
            } else {
                scrollTopBtn.classList.remove("show");
            }
        });

        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
