document.addEventListener('DOMContentLoaded', () => {
    if(typeof initAudioSystem === 'function') initAudioSystem();
    if(typeof initTypingAnimation === 'function') initTypingAnimation();
    if(typeof initPasswordSimulator === 'function') initPasswordSimulator();
    if(typeof initAttackSimulator === 'function') initAttackSimulator();
    initMobileMenu();
    initThemeToggle();
});

function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const links = document.querySelector('.nav-links');
    if (!toggle || !links) return;
    
    toggle.addEventListener('click', () => {
        links.classList.toggle('active');
        if(typeof audioSys !== 'undefined') audioSys.playBeep();
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('active');
            if(typeof audioSys !== 'undefined') audioSys.playBeep();
        });
    });
}

function initThemeToggle() {
    const btn = document.getElementById('theme_toggle_btn');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
        const body = document.body;
        body.classList.toggle('theme-hacker');
        
        if (body.classList.contains('theme-hacker')) {
            btn.innerHTML = '<i class="fas fa-mask"></i> Neon Mode';
        } else {
            btn.innerHTML = '<i class="fas fa-terminal"></i> Hacker Mode';
        }
        if(typeof audioSys !== 'undefined') audioSys.playBeep(900, 0.1);
    });
}
