document.addEventListener("DOMContentLoaded", function () {
    let fleche = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) { // Affiche la flèche après 200px de scroll
            fleche.style.display = "block";
        } else {
            fleche.style.display = "none";
        }
    });

    fleche.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Animation fluide
        });
    });
});