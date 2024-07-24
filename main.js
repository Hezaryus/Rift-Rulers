document.addEventListener('DOMContentLoaded', () => {
    // Animation d'apparition au défilement (scroll)
    const elementsToAnimate = document.querySelectorAll('.animate');

    const animateOnScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        elementsToAnimate.forEach(el => {
            if (el.offsetTop < scrollPosition) {
                el.classList.add('animate-on');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Exécuter immédiatement pour les éléments déjà dans la vue

    // Animation des boutons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Effet de défilement fluide pour les ancres
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link
