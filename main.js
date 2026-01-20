document.addEventListener('DOMContentLoaded', () => {

    // --- FORZAR AUTOPLAY EN MÓVILES ---
    const video = document.querySelector('.homers-web-page');

    if (video) {
        // 1. Forzamos el silencio por código (Chrome es paranoico con esto)
        video.muted = true;

        // 2. Promesa de reproducción
        const playPromise = video.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // El video empezó a reproducirse automáticamente
                console.log("Autoplay iniciado correctamente.");
            })
                .catch(error => {
                    // Si entra aquí, es 100% bloqueo del Sistema Operativo
                    console.log("El navegador bloqueó el autoplay:", error);

                    // Opción desesperada: Volver a silenciar y reintentar
                    video.muted = true;
                    video.play();
                });
        }
    }

    // --- ANIMACIONES DE SCROLL (Intersection Observer) ---
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