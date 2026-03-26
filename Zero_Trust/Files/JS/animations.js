function initTypingAnimation() {
    const textElement = document.getElementById('typing-text');
    if (!textElement) return;
    const texts = [
        "Learn How Hackers Exploit Weak Frontend Security",
        "Master Real-Time Threat Detection",
        "Understand Secure Coding Practices",
        "Identify Form Validation Vulnerabilities"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 50;

    function type() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            textElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30;
        } else {
            textElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 70;
            if (Math.random() > 0.5 && typeof audioSys !== 'undefined') {
                audioSys.playBeep(800, 0.02, 0.01);
            }
        }
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }
    setTimeout(type, 1000);
}

setInterval(() => {
    const el = document.querySelector('.glitch');
    if(el) {
        el.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        setTimeout(() => {
            el.style.transform = 'translate(0, 0)';
        }, 50);
    }
}, 3000);
