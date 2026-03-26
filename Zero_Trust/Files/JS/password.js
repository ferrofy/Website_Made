function initPasswordSimulator() {
    const pwdInput = document.getElementById('password_input');
    if (!pwdInput) return;
    
    const toggleBtn = document.getElementById('toggle_pwd_visibility');
    const strengthText = document.getElementById('strength_level_text');
    const strengthBar = document.getElementById('strength_bar');
    
    const reqLength = document.getElementById('req_length');
    const reqUpper = document.getElementById('req_upper');
    const reqLower = document.getElementById('req_lower');
    const reqNumber = document.getElementById('req_number');
    const reqSymbol = document.getElementById('req_symbol');

    toggleBtn.addEventListener('click', () => {
        const type = pwdInput.getAttribute('type') === 'password' ? 'text' : 'password';
        pwdInput.setAttribute('type', type);
        toggleBtn.innerHTML = type === 'password' ? '<i class="fas fa-eye"></i>' : '<i class="fas fa-eye-slash"></i>';
        if(typeof audioSys !== 'undefined') audioSys.playBeep(400, 0.1);
    });

    pwdInput.addEventListener('input', (e) => {
        const pwd = e.target.value;
        let score = 0;

        if (pwd.length >= 8) { setValid(reqLength, true); score++; } else setValid(reqLength, false);
        if (/[A-Z]/.test(pwd)) { setValid(reqUpper, true); score++; } else setValid(reqUpper, false);
        if (/[a-z]/.test(pwd)) { setValid(reqLower, true); score++; } else setValid(reqLower, false);
        if (/[0-9]/.test(pwd)) { setValid(reqNumber, true); score++; } else setValid(reqNumber, false);
        if (/[^A-Za-z0-9]/.test(pwd)) { setValid(reqSymbol, true); score++; } else setValid(reqSymbol, false);
        if (pwd.length > 12) score++;

        updateStrengthUI(score, pwd.length);
        if(pwd.length > 0 && typeof audioSys !== 'undefined') audioSys.playBeep(600 + (score * 100), 0.03, 0.02);
    });

    function setValid(el, isValid) {
        if (isValid) {
            el.classList.add('valid');
        } else {
            el.classList.remove('valid');
            el.querySelector('i').className = 'fas fa-times-circle text-red';
        }
    }

    function updateStrengthUI(score, length) {
        if (length === 0) {
            strengthText.textContent = 'None';
            strengthText.className = 'status-badge';
            strengthBar.className = 'meter-fill';
            strengthBar.style.width = '0%';
            return;
        }

        if (score <= 2) {
            strengthText.textContent = 'Weak';
            strengthText.className = 'status-badge weak';
            strengthBar.className = 'meter-fill fill-weak';
            strengthBar.style.width = '25%';
        } else if (score >= 3 && score < 5) {
            strengthText.textContent = 'Medium';
            strengthText.className = 'status-badge medium';
            strengthBar.className = 'meter-fill fill-medium';
            strengthBar.style.width = '60%';
        } else {
            strengthText.textContent = 'Strong';
            strengthText.className = 'status-badge strong';
            strengthBar.className = 'meter-fill fill-strong';
            strengthBar.style.width = '100%';
        }
    }
}
