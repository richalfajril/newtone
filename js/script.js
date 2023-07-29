// Tambahkan event listener untuk tombol "close" offcanvas
document.querySelector(".offcanvas-header .btn-close").addEventListener("click", function () {
    const offcanvas = document.getElementById("offcanvasNavbar");
    offcanvas.classList.add("closing");
});

// Tambahkan event listener untuk setiap `nav-link` yang akan menutup offcanvas
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const offcanvas = document.getElementById("offcanvasNavbar");
        offcanvas.classList.add("closing");
    });
});

// Hilangkan kelas "closing" setelah durasi animasi selesai (0.3 detik)
document.getElementById("offcanvasNavbar").addEventListener("transitionend", function (event) {
    if (event.propertyName === "transform") {
        const offcanvas = event.target;
        offcanvas.classList.remove("closing");
    }
});
