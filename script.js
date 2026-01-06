function showSection(section, el) {
  document.getElementById("tools").classList.add("hidden");
  document.getElementById("games").classList.add("hidden");

  document.getElementById(section).classList.remove("hidden");

  document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
  el.classList.add("active");
}

function passwordGen() {
  const length = prompt("Panjang password?", 12);
  if (!length) return;

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let pass = "";

  for (let i = 0; i < length; i++) {
    pass += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  alert("Password kamu:\n\n" + pass);
}

function guessGame() {
  const number = Math.floor(Math.random() * 10) + 1;
  const guess = prompt("Tebak angka 1 - 10");

  if (!guess) return;

  if (parseInt(guess) === number) {
    alert("🎉 Benar! Angkanya " + number);
  } else {
    alert("❌ Salah. Angkanya " + number);
  }
}