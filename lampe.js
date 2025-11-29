const bulb = document.getElementById('bulb');
const cord = document.getElementById('cord');
const status = document.getElementById('status');

let isOn = false;

cord.addEventListener('mousedown', () => {
    isOn = !isOn;
    if (isOn) {
        bulb.classList.replace('bulb-off', 'bulb-on');
        status.textContent = "Service ML activé";
    } else {
        bulb.classList.replace('bulb-on', 'bulb-off');
        status.textContent = "Service ML désactivé";
    }
});