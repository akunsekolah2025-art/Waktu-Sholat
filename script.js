// --- Bagian Jam Digital ---
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Perbarui jam setiap 1 detik
setInterval(updateClock, 1000);
updateClock(); // Panggil pertama kali agar jam langsung muncul

// --- Bagian Waktu Sholat (Data Hardcoded) ---
// Data waktu sholat ini sudah dimasukkan secara statis.
// Jika Anda ingin mengubahnya, silakan ubah nilai di bawah ini.

const sholatTimes = {
    "Subuh": "05.00",
    "Dzuhur": "12.27",
    "Ashar": "15.48",
    "Maghrib": "18.33",
    "Isya'": "19.45"
};

const prayerTimesDiv = document.getElementById('prayer-times');

// Tampilkan setiap waktu sholat
for (const [key, value] of Object.entries(sholatTimes)) {
    const prayerDiv = document.createElement('div');
    prayerDiv.innerHTML = `<span>${key}</span> <span>${value}</span>`;
    prayerTimesDiv.appendChild(prayerDiv);
}