const g = document.getElementById("greeting");
const h = new Date().getHours();

if (h >= 5 && h < 12) g.innerText = "Selamat Pagi 👋";
else if (h < 15) g.innerText = "Selamat Siang 👋";
else if (h < 18) g.innerText = "Selamat Sore 👋";
else g.innerText = "Selamat Malam 👋";

document.getElementById("year").innerText = new Date().getFullYear();