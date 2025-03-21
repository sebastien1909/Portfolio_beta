function toggleDetails(button) {
    let details = button.nextElementSibling;
    let projetCont = button.closest(".projet_cont");

    if (!details.classList.contains("show")) {
        details.classList.add("show");
        projetCont.style.height = "auto";
        button.style.marginBottom = "100px";
        button.textContent = "Retour";
    } else {
        details.classList.remove("show");
        projetCont.style.height = "";
        button.style.marginBottom = "0px";
        button.textContent = "Voir en détail";
    }
}