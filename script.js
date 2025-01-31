function toggleMenu() {
    const menu = document.getElementById("menu");
    const overlay = document.getElementById("overlay");
    const menuButton = document.querySelector(".menu-container");

    const isOpen = menu.style.transform === "translateX(0px)";

    menu.style.transform = isOpen ? "translateX(-100%)" : "translateX(0)";
    overlay.classList.toggle("active");
    menuButton.classList.toggle("active");
}
