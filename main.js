document.addEventListener('DOMContentLoaded', () => {

    // --- 1. CORRECCIÓN PARA SAFARI (Forzar Autoplay) ---
    const video = document.querySelector('.homers-web-page');

    if (video) {
        // Aseguramos que esté muteado (requisito indispensable para Safari/Chrome)
        video.muted = true;

        // Intentamos reproducir programáticamente
        video.play().catch(error => {
            console.log("El navegador bloqueó el autoplay (posible Modo Ahorro de Batería):", error);
        });
    }

    // --- 2. ANIMACIONES AL HACER SCROLL (Observer) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mostrar');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.oculto');
    hiddenElements.forEach((el) => observer.observe(el));
});