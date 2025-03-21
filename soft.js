function toggleText(fleche) {
    let softSkill = fleche.closest(".soft_skill"); 
    let textSection = softSkill.nextElementSibling; 

    let img = fleche.querySelector("img"); 

    if (!textSection.classList.contains("active")) {
        textSection.classList.add("active"); 
        textSection.style.maxHeight = textSection.scrollHeight + "px"; 
        textSection.style.opacity = "1"; 
        img.src = "img/fleche_haut.png"; 
        softSkill.style.borderRadius = "50px 50px 0 0"; 
    } else {
        textSection.classList.remove("active"); 
        textSection.style.maxHeight = "0"; 
        textSection.style.opacity = "0"; 
        img.src = "img/fleche_bas.png"; 
        softSkill.style.borderRadius = "50px"; 
    }
}



document.addEventListener("DOMContentLoaded", function () {
    let softSkills = document.querySelectorAll(".soft_skill");

    softSkills.forEach(softSkill => {
        let justif = softSkill.nextElementSibling;

        softSkill.addEventListener("mouseenter", function () {
            justif.style.transform = "scaleX(1.05)";
        });
        

        softSkill.addEventListener("mouseleave", function () {
            justif.style.transform = "scaleX(1)";
        });
    });
});







