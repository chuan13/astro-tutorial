document.getElementsByClassName("hamburger")[0]?.addEventListener("click", () => {
    document.getElementsByClassName("nav-links")[0]?.classList.toggle("expanded");
});