// Efecto de scroll suave para los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cambiar el fondo del nav al hacer scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('bg-black');
        nav.classList.remove('bg-darkBg/90');
    } else {
        nav.classList.remove('bg-black');
        nav.classList.add('bg-darkBg/90');
    }
});

console.log("Alfa House Rowing Club - Web Cargada");
