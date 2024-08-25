// Adicione este código no seu arquivo scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');

    function checkVisibility() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible'); // Adiciona classe de visibilidade se o elemento estiver na viewport
            } else {
                el.classList.remove('visible'); // Remove classe se o elemento não estiver na viewport
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica visibilidade ao carregar a página
});
