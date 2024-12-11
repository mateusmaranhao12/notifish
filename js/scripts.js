$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1, // Exibe 1 item por vez
        loop: true, // Ativa o looping
        nav: false, // Desativa setas
        dots: true, // Exibe as bolinhas de navegação
        autoplay: true, // Ativa autoplay
        autoplayTimeout: 5000, // Tempo entre os slides
        autoplayHoverPause: true // Pausa ao passar o mouse
    });
});
