document.addEventListener("DOMContentLoaded", function() {
    // 1. Logika Dark Mode / Light Mode Toggle
    const themeToggleBtn = document.getElementById("themeToggle");
    const bodyElement = document.body;
    const themeIcon = themeToggleBtn.querySelector("i");

    // Periksa apakah pengguna sebelumnya sudah menyimpan pilihan mode
    if (localStorage.getItem("theme") === "light") {
        bodyElement.classList.add("light-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggleBtn.addEventListener("click", function() {
        bodyElement.classList.toggle("light-mode");
        
        if (bodyElement.classList.contains("light-mode")) {
            themeIcon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "light");
        } else {
            themeIcon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "dark");
        }
    });

    // 2. Logika Tombol Panah Naik (Scroll to Top)
    const scrollTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function() {
        // Tampilkan tombol jika halaman digulir ke bawah lebih dari 300 piksel
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
});