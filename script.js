const bar= document.getElementById('bar');
const close= document.getElementById('close');
const nav= document.getElementById('navbar');

if (bar){
    bar.addEventListener('click',()=> {
        nav.classList.add('active')
    })
};

if (close){
    close.addEventListener('click',()=> {
        nav.classList.remove('active')
    })
};

/* ============ DARK/LIGHT MODE TOGGLE ============ */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved preference OR respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark.matches)) {
        body.classList.add('dark-mode');
    }
    
    // Toggle on click
    themeToggle?.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
    
    // Optional: React to OS theme changes if no manual preference set
    prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            body.classList.toggle('dark-mode', e.matches);
        }
    });
});
/* ============ HERO IMAGE SWITCHER ============ */
const hero = document.getElementById('hero');
const HERO_LIGHT = './image/close-up-clock-with-time-change.jpg';
const HERO_DARK = './image/whitebghero.jpg';

function updateHeroBackground(isDark) {
    // Simple fade effect
    hero.style.transition = 'opacity 0.3s ease';
    hero.style.opacity = '0.7';
    
    setTimeout(() => {
        hero.style.backgroundImage = `url(${isDark ? HERO_DARK : HERO_LIGHT})`;
        hero.style.opacity = '1';
    }, 150);
}

// Initialize on load
const isDarkOnLoad = body.classList.contains('dark-mode');
updateHeroBackground(isDarkOnLoad);

// Update when theme toggles
themeToggle?.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-mode');
    updateHeroBackground(isDark);
});