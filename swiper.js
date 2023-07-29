var swiper = new Swiper(".swiper-container", {
    slidesPerView: 3, // Menampilkan 3 slide dalam satu tampilan
    spaceBetween: 30, // Jarak antar slide (dalam pixel)
    loop: true, // Mengaktifkan loop
    autoplay: {
        delay: 1000, // Waktu tampilan tiap slide (dalam milidetik)
        disableOnInteraction: false, // Memastikan autoplay tetap berjalan saat user melakukan interaksi (misalnya klik)
    },
    speed: 800, // Durasi transisi slide (dalam milidetik)
    effect: "slide", // Atur efek transisi slide menjadi 'slide' (atau gunakan 'fade' untuk transisi lebih halus)
    // Tambahkan opsi lainnya sesuai kebutuhan
    // ...
    breakpoints: {
        // Mengatur tampilan Swiper untuk layar seluler dengan lebar maksimum 576px
        300: {
            slidesPerView: 1, // Menampilkan satu slide dalam satu tampilan
            spaceBetween: 10, // Jarak antar slide (dalam pixel)
        },
        768: {
            slidesPerView: 3, // Menampilkan 3 slide dalam satu tampilan
            spaceBetween: 30, // Jarak antar slide (dalam pixel)
        },
    },
});
