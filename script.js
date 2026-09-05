document.addEventListener("DOMContentLoaded", function() {
    // 1. Logika Dark Mode / Light Mode Toggle (Versi Simpel & Aman)
    const themeToggleBtn = document.getElementById("themeToggle");
    const bodyElement = document.body;

    // Cek memori tema sebelumnya
    if (localStorage.getItem("theme") === "light") {
        bodyElement.classList.add("light-mode");
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function() {
            bodyElement.classList.toggle("light-mode");
            
            // Simpan status ke localStorage
            if (bodyElement.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
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
