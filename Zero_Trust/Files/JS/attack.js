const attackSignatures = [
    { type: 'SQL Injection', regex: /(\%27)|(\')|(\-\-)|(\%23)|(#)|(\b(OR|AND)\b.+?\=.+)/i },
    { type: 'Cross-Site Scripting (XSS)', regex: /((\%3C|<)[^\n]+(\%3E|>))|javascript:/i },
    { type: 'Command Injection', regex: /;|\|\||&&/ }
];

function initAttackSimulator() {
    const form = document.getElementById('vulnerable_form');
    if (!form) return;
    const userIn = document.getElementById('vuln_username');
    const passIn = document.getElementById('vuln_password');
    const detectorOutput = document.getElementById('detector_output');
    const threatDetails = document.getElementById('threat_details');
    const detectedPattern = document.getElementById('detected_pattern');
    const detectedType = document.getElementById('detected_type');
    const detectionUI = document.querySelector('.detection-system');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = userIn.value;
        const password = passIn.value;
        if (!username && !password) return;

        logToTerminal(`> ANALYZING PAYLOAD...`);
        let isSafe = true;

        [username, password].forEach(input => {
            attackSignatures.forEach(sig => {
                if (sig.regex.test(input)) {
                    isSafe = false;
                    triggerAlert(input, sig.type);
                }
            });
        });

        if (isSafe) {
            logToTerminal(`> INPUT SAFE. PROCEEDING WITH LOGIN...`);
            resetAlertUI();
            if(typeof audioSys !== 'undefined') audioSys.playBeep(1200, 0.1, 0.05);
        }
    });

    function triggerAlert(payload, type) {
        if(typeof audioSys !== 'undefined') audioSys.playAlarm();
        detectionUI.classList.add('alert-active');
        threatDetails.classList.remove('hidden');
        detectedPattern.textContent = payload;
        detectedType.textContent = type;
        logToTerminal(`> [CRITICAL WARNING] MALICIOUS INPUT DETECTED!`);
        logToTerminal(`> BLOCKING REQUEST...`);
        logToTerminal(`> LOGGING IP ADDRESS...`);
    }

    function resetAlertUI() {
        detectionUI.classList.remove('alert-active');
        threatDetails.classList.add('hidden');
    }

    function logToTerminal(msg) {
        const time = new Date().toLocaleTimeString();
        detectorOutput.innerHTML += `\n[${time}] ${msg}`;
        detectorOutput.scrollTop = detectorOutput.scrollHeight;
    }
}

window.injectPayload = function(payload) {
    const userIn = document.getElementById('vuln_username');
    userIn.value = payload;
    document.getElementById('vuln_password').value = "password123";
    userIn.focus();
    if(typeof audioSys !== 'undefined') audioSys.playBeep(800, 0.1);
    setTimeout(() => {
        document.getElementById('vulnerable_form').dispatchEvent(new Event('submit'));
    }, 800);
};
