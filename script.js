// Tarih
const dateEl = document.getElementById("date");
const today = new Date();
dateEl.innerText = today.toLocaleDateString("tr-TR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

// Güzel sözler
const quotes = [
  "Sevgi, iki insanın birbirine bakması değil, birlikte aynı yöne bakmasıdır.",
  "Aşk, kalbin yorulduğunda bile vazgeçmemesidir.",
  "Sevdiğin insan, evindir.",
  "Bazı günler kalp ağırdır, ama hâlâ sever."
];
document.getElementById("quote").innerText =
  quotes[today.getDate() % quotes.length];

// Günlük şarkılar (istersen sonra değiştirirsin)
const songs = [
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
];

const music = document.getElementById("music");
music.src = songs[today.getDate() % songs.length];
music.volume = 0.15;

// 23:00 uyku vakti
function checkSleepTime() {
  const now = new Date();
  if (now.getHours() >= 23) {
    document.getElementById("sleepScreen").style.display = "flex";
  }
}
checkSleepTime();
setInterval(checkSleepTime, 60000);
