// Esperamos a que el contenido cargue (buena práctica aunque usemos defer)
document.addEventListener('DOMContentLoaded', () => {

    // Creamos el observador (el vigilante)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                // Le añadimos la clase 'mostrar' para activar el CSS
                entry.target.classList.add('mostrar');
            }
        });
    });

    // Seleccionamos TODOS los elementos que tengan la clase 'oculto'
    const hiddenElements = document.querySelectorAll('.oculto');

    // Le decimos al observador que vigile a cada uno de ellos
    hiddenElements.forEach((el) => observer.observe(el));
});