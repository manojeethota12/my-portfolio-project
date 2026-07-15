// Theme Toggle Functionality

const themeToggle = document.getElementById("theme-toggle");

// Check if a saved theme exists
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeToggle.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "dark");

        themeToggle.textContent = "🌙";

    }

});


// Smooth Reveal Animation

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach((element) => {
    observer.observe(element);
});