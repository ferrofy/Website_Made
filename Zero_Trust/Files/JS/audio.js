const audioSys = {
    ctx: null,
    init: function() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
    },
    playBeep: function(freq = 600, duration = 0.05, vol = 0.05) {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    },
    playAlarm: function() {
        if (!this.ctx) return;
        let time = this.ctx.currentTime;
        for(let i=0; i<3; i++) {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.type = 'square';
            osc.frequency.setValueAtTime(400, time);
            osc.frequency.linearRampToValueAtTime(800, time + 0.2);
            gain.gain.setValueAtTime(0.1, time);
            gain.gain.linearRampToValueAtTime(0, time + 0.3);
            osc.start(time);
            osc.stop(time + 0.3);
            time += 0.4;
        }
    }
};

function initAudioSystem() {
    document.body.addEventListener('click', () => {
        if (audioSys.ctx && audioSys.ctx.state === 'suspended') {
            audioSys.ctx.resume();
        } else if (!audioSys.ctx) {
            audioSys.init();
        }
    }, { once: true });
}
