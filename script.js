document.addEventListener("DOMContentLoaded", function() {
    // 1. Logika Dark Mode / Light Mode Toggle
    const themeToggleBtn = document.getElementById("themeToggle");
    const bodyElement = document.body;

    if (localStorage.getItem("theme") === "light") {
        bodyElement.classList.add("light-mode");
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function() {
            bodyElement.classList.toggle("light-mode");
            
            if (bodyElement.classList.contains("light-mode")) {
                localStorage.setItem("theme", "light");
            } else {
                localStorage.setItem("theme", "dark");
            }
        });
    }

    // 2. Logika Ganti Bahasa (ID / EN)
    const langToggleBtn = document.getElementById("langToggle");
    let currentLang = localStorage.getItem("lang") || "id";

    function setLanguage(lang) {
        const elements = document.querySelectorAll("[data-id]");
        elements.forEach(el => {
            if (lang === "en") {
                el.innerHTML = el.getAttribute("data-en");
            } else {
                el.innerHTML = el.getAttribute("data-id");
            }
        });
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === "en" ? "ID" : "EN";
        }
        localStorage.setItem("lang", lang);
    }

    setLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener("click", function() {
            currentLang = currentLang === "id" ? "en" : "id";
            setLanguage(currentLang);
        });
    }

    // 3. Logika Tombol Panah Naik (Scroll to Top)
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
