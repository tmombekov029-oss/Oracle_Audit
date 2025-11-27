// Функции для мобильного меню
function openMenu() {
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("overlay").classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
    document.body.style.overflow = 'auto';
}

// Закрытие меню при клике на ссылку
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeMenu();
        });
    });
    
    // Закрытие меню при клике на оверлей
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Закрытие меню при нажатии ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});